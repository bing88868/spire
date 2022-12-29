package database

import (
	"fmt"
	"github.com/Akkadius/spire/internal/models"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// Connections application database connections
type Connections struct {
	spireDb *gorm.DB
	eqemuDb *gorm.DB
	logger  *logrus.Logger
}

func (c Connections) EqemuDb() *gorm.DB {
	return c.eqemuDb
}

func (c Connections) SpireDb() *gorm.DB {
	return c.spireDb
}

func NewConnections(
	spire *gorm.DB,
	EQEmu *gorm.DB,
	logger *logrus.Logger,
) *Connections {
	return &Connections{
		spireDb: spire,
		eqemuDb: EQEmu,
		logger:  logger,
	}
}

var spireTables = []models.Modelable{
	&models.User{},
	&models.UserServerDatabaseConnection{},
	&models.ServerDatabaseConnection{},
	&models.AnalyticEvent{},
	&models.AnalyticEventCount{},
	&models.UserEventLog{},
	&models.UserServerResourcePermission{},
	&models.CrashReport{},
}

func (c Connections) SpireMigrate(drop bool) {
	for _, table := range spireTables {
		if drop {
			fmt.Printf("Dropping table [%v]\n", table.TableName())
			_ = c.SpireDb().Migrator().DropTable(table)
		}

		// build migrator instance
		migrator := c.SpireDb().
			Session(&gorm.Session{Logger: logger.Default.LogMode(logger.Silent)}).
			Migrator()

		// only emit creation message when the table doesn't actually exist
		if !migrator.HasTable(table) {
			fmt.Printf("[Database] Creating table [%v]\n", table.TableName())
		}

		// always run migration incase there are schema changes
		err := migrator.AutoMigrate(table)
		if err != nil {
			c.logger.Error(err)
		}
	}
}
