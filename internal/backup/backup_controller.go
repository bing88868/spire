package backup

import (
	"github.com/Akkadius/spire/internal/http/routes"
	"github.com/Akkadius/spire/internal/pathmgmt"
	"github.com/k0kubun/pp/v3"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"net/http"
	"path/filepath"
)

type Controller struct {
	logger   *logrus.Logger
	mysql    *Mysql
	pathmgmt *pathmgmt.PathManagement
}

func NewController(
	logger *logrus.Logger,
	mysql *Mysql,
	pathmgmt *pathmgmt.PathManagement,
) *Controller {
	return &Controller{
		logger:   logger,
		mysql:    mysql,
		pathmgmt: pathmgmt,
	}
}

func (a *Controller) Routes() []*routes.Route {
	return []*routes.Route{
		routes.RegisterRoute(http.MethodPost, "backup/mysql", a.backupMysql, nil),
		routes.RegisterRoute(http.MethodGet, "backup/mysql-dump-download/:file", a.mysqlBackupDownload, nil),
	}
}

func (a *Controller) backupMysql(c echo.Context) error {
	p := new(BackupRequest)
	if err := c.Bind(p); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}

	pp.Println(p)

	r := a.mysql.Backup(*p)
	
	return c.JSON(http.StatusOK, r)
}

func (a *Controller) mysqlBackupDownload(c echo.Context) error {
	file := c.Param("file")
	downloadPath := filepath.Join(a.pathmgmt.GetEQEmuServerPath(), "backups", filepath.Base(file))

	return c.Inline(downloadPath, filepath.Base(file))
}