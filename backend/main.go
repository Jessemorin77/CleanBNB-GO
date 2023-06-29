
package main

import (
	"backend/app/handlers"
	"backend/db"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/session"
)

func main() {
	db.InitDB("./test.db")

	app := fiber.New()

	store := session.New(session.Config{
		Expiration:   0,
		CookieSecure: false, // Set it to true if you're using HTTPS
	})

	app.Use(store)

	handlers.SetupRoutes(app, db.DB)

	err := app.Listen(":3001")
	if err != nil {
		panic(err)
	}
}

