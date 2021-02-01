package boot

import (
	"github.com/Akkadius/spire/http/controllers"
	appmiddleware "github.com/Akkadius/spire/http/middleware"
	"github.com/Akkadius/spire/http/routes"
	"github.com/Akkadius/spire/models"
	"github.com/google/wire"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
	"time"
)

var httpSet = wire.NewSet(
	appmiddleware.NewUserContextMiddleware,
	controllers.NewHelloWorldController,
	controllers.NewConnectionsController,
	controllers.NewMeController,
	controllers.NewAuthController,
	controllers.NewDocsController,
	controllers.NewQuestApiController,
	provideControllers,
	NewRouter,
)

type appControllerGroups struct {
	authControllers       []routes.Controller
	helloWorldControllers []routes.Controller
	v1controllers         []routes.Controller
	v1controllersNoAuth   []routes.Controller
}

func NewRouter(
	cg *appControllerGroups,
	crudc *crudControllers,
	userContextMiddleware *appmiddleware.UserContextMiddleware,
) *routes.Router {
	return routes.NewHttpRouter(

		// pre middleware
		[]echo.MiddlewareFunc{
			middleware.RemoveTrailingSlash(),
		},

		// post middleware
		[]echo.MiddlewareFunc{
			middleware.Logger(),
			middleware.Recover(),
			middleware.CORSWithConfig(
				middleware.CORSConfig{
					AllowOrigins: []string{"*"},
					AllowMethods: []string{
						http.MethodGet,
						http.MethodHead,
						http.MethodPut,
						http.MethodPatch,
						http.MethodPost,
						http.MethodDelete,
						http.MethodOptions,
					},
				},
			),
		},

		// controller groups
		[]*routes.ControllerGroup{
			routes.NewControllerGroup("/auth/", cg.authControllers, []echo.MiddlewareFunc{}...),
			routes.NewControllerGroup("/api/v1/", cg.v1controllers, userContextMiddleware.Handle(), v1RateLimit()),
			routes.NewControllerGroup("/api/v1/", cg.v1controllersNoAuth, middleware.GzipWithConfig(middleware.GzipConfig{Level: 1}), v1RateLimit()),
			routes.NewControllerGroup("/api/v1/", crudc.routes, userContextMiddleware.Handle(), v1RateLimit()),
		},
	)
}

// controllers provider
func provideControllers(
	helloWorldController *controllers.HelloWorldController,
	authController *controllers.AuthController,
	meController *controllers.MeController,
	connectionsController *controllers.ConnectionsController,
	docsController *controllers.DocsController,
	questApiController *controllers.QuestApiController,
) *appControllerGroups {
	return &appControllerGroups{
		authControllers: []routes.Controller{
			authController,
		},
		v1controllers: []routes.Controller{
			meController,
			connectionsController,
			helloWorldController,
			docsController,
		},
		v1controllersNoAuth: []routes.Controller{
			questApiController,
		},
	}
}

func v1RateLimit() echo.MiddlewareFunc {
	return appmiddleware.RateLimiterWithConfig(appmiddleware.RateLimiterConfig{
		Skipper: func(c echo.Context) bool {

			// if there is a validate user - skip the middleware
			user, ok := c.Get("user").(models.User)
			if ok {
				if user.ID > 0 {
					return true
				}
			}

			return false
		},
		LimitConfig: appmiddleware.LimiterConfig{
			Max:      40,
			Duration: time.Second * 1,
			Strategy: "ip",
			Key:      "",
		},
		Prefix:                       "LIMIT",
		Client:                       nil,
		SkipRateLimiterInternalError: false,
		OnRateLimit:                  nil,
	})
}
