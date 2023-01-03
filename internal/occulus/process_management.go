package occulus

import (
	"context"
	"fmt"
	"github.com/Akkadius/spire/internal/download"
	"github.com/Akkadius/spire/internal/env"
	"github.com/Akkadius/spire/internal/pathmgmt"
	"github.com/google/go-github/v41/github"
	"github.com/k0kubun/pp/v3"
	"github.com/shirou/gopsutil/v3/process"
	"github.com/sirupsen/logrus"
	"io/ioutil"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strconv"
	"strings"
)

type ProcessManagement struct {
	port     int
	logger   *logrus.Logger
	pathmgmt *pathmgmt.PathManagement
}

func (m *ProcessManagement) Port() int {
	return m.port
}

func (m *ProcessManagement) SetPort(port int) {
	m.port = port
}

func NewProcessManagement(pathmgmt *pathmgmt.PathManagement, logger *logrus.Logger) *ProcessManagement {
	i := &ProcessManagement{
		pathmgmt: pathmgmt,
		logger:   logger,
	}

	err := i.Run()
	if err != nil {
		logger.Error(err)
	}

	return i
}

func checkIfPortAvailable(port int) (status bool, err error) {
	// Concatenate a colon and the port
	host := ":" + strconv.Itoa(port)

	// Try to create a server with the port
	server, err := net.Listen("tcp", host)

	// if it fails then the port is likely taken
	if err != nil {
		return false, err
	}

	// close the server
	server.Close()

	// we successfully used and closed the port
	// so it's now available to be used again
	return true, nil

}

func (m *ProcessManagement) Run() error {
	client := github.NewClient(nil)
	release, _, err := client.Repositories.GetLatestRelease(
		context.Background(),
		"Akkadius",
		"Occulus",
	)
	if err != nil {
		return err
	}

	// build binary target name from asset name
	// eg. occulus-v2-1-0
	tagName := *release.TagName
	binaryName := fmt.Sprintf("%v-%v", "occulus", tagName)
	binaryName = strings.ReplaceAll(binaryName, ".", "-")
	downloadPath := filepath.Join(m.pathmgmt.GetEQEmuServerPath(), "bin", binaryName)

	// kill existing
	err = m.KillExistingRunningProcesses()
	if err != nil {
		return err
	}

	// cleanup
	err = m.CleanupOldVersions(tagName)
	if err != nil {
		return err
	}

	// check if binary exists before we try to download it
	if _, err := os.Stat(downloadPath); err != nil {

		// loop through latest release assets
		for _, asset := range release.Assets {
			releaseAssetName := *asset.Name
			releaseDownloadUrl := *asset.BrowserDownloadURL

			// find asset / release matching the operating system
			if strings.Contains(releaseAssetName, runtime.GOOS) {
				m.logger.Infof("[Occulus.ProcessManagement] Downloading new binary @ [%v]\n", downloadPath)
				err := download.WithProgress(downloadPath, releaseDownloadUrl)
				if err != nil {
					return err
				}
			}
		}
	}

	// free port
	port := m.FindFreePort()
	if port > 0 {
		m.logger.Infof("[Occulus.ProcessManagement] Found free port @ [%v]\n", port)
		m.SetPort(port)
	}

	if port == 0 {
		m.logger.Fatalf("[Occulus.ProcessManagement] Failed to find free port\n")
	}

	// run binary
	go func() {
		for {
			pp.Println("Running binary")
			cmd := exec.Command(downloadPath, "web", fmt.Sprintf("%v", port))
			err = cmd.Run()
			if err != nil {
				m.logger.Error(err)
			}
		}
	}()

	return nil
}

func (m *ProcessManagement) FindFreePort() int {
	// if we want to override the port over the statically defined port
	envPort := env.GetInt("OCCULUS_PORT", "0")
	if envPort > 0 {
		return envPort
	}

	// pull port dynamically from range
	port := 0
	for i := 49152; i <= 65535; i++ {
		found, err := checkIfPortAvailable(i)
		if found && err == nil {
			port = i
			break
		}
	}

	return port
}

func (m *ProcessManagement) CleanupOldVersions(version string) error {
	versionTag := strings.ReplaceAll(version, ".", "-")
	currentBinaryName := fmt.Sprintf("%v-%v", "occulus", versionTag)
	currentBinaryName = strings.ReplaceAll(currentBinaryName, ".", "-")
	serverBinDirectory := filepath.Join(m.pathmgmt.GetEQEmuServerPath(), "bin")

	files, err := ioutil.ReadDir(serverBinDirectory)
	if err != nil {
		return err
	}

	for _, file := range files {
		if strings.Contains(file.Name(), "occulus") && file.Name() != currentBinaryName {
			m.logger.Infof("[Occulus.ProcessManagement] Removing old binary [%v]\n", file.Name())
			binPath := filepath.Join(serverBinDirectory, file.Name())
			if err := os.Remove(binPath); err != nil {
				return err
			}
		}
	}

	return nil
}

func (m *ProcessManagement) KillExistingRunningProcesses() error {
	processes, _ := process.Processes()
	for _, p := range processes {
		cmdline, err := p.Cmdline()
		if err != nil {
			return err
		}
		if strings.Contains(cmdline, "occulus") && strings.Contains(cmdline, "web") {
			processName, _ := p.Name()
			m.logger.Infof("[Occulus.ProcessManagement] Found existing running process, killing [%v] PID (%v)\n", processName, p.Pid)

			err := p.Kill()
			if err != nil {
				return err
			}
		}
	}

	return nil
}