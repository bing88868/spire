package boot

import (
	"github.com/Akkadius/spire/util"
	"github.com/go-errors/errors"
	"github.com/google/wire"
	"github.com/sirupsen/logrus"
	"os"
)

const (
	LoggingFormatText = "text"
	LoggingFormatJson = "json"
)

// wire set for loading the stores.
var loggerSet = wire.NewSet(
	provideLogger,
)

// logging provider
func provideLogger() (*logrus.Logger, error) {
	baseLogger := logrus.New()
	cnf, err := getLoggerConfig()
	if err != nil {
		return nil, err
	}

	baseLogger.SetFormatter(&logrus.TextFormatter{
		FullTimestamp:          true,
		TimestampFormat:        "2006-01-02 15:04:05",
		ForceColors:            true,
		DisableLevelTruncation: true,
	})

	if cnf.Formatter == LoggingFormatJson {
		baseLogger.SetFormatter(&logrus.JSONFormatter{})
	}

	baseLogger.WithFields(logrus.Fields{
		"application": cnf.Application,
		"environment": cnf.Environment,
	})

	return baseLogger, nil
}

// logger config
type LoggerConfig struct {
	Application string
	Environment string
	Formatter   string // json or text
}

// return logger config
func getLoggerConfig() (*LoggerConfig, error) {
	c := &LoggerConfig{
		Application: os.Getenv("APP_NAME"),
		Environment: util.GetEnv("LOGGING_APP_ENVIRONMENT", "local"),
		Formatter:   util.GetEnv("LOGGING_FORMAT", "text"),
	}

	if len(c.Application) == 0 {
		return &LoggerConfig{}, errors.New("application must be present")
	}

	return c, nil
}
