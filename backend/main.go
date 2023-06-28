package main

import (
	"backend/app/handlers"
	"backend/db"

	"github.com/gofiber/fiber/v2"
)

func main() {
	db.InitDB("./test.db")

	app := fiber.New()
  
	handlers.SetupRoutes(app, db.DB)

	app.Listen(":3000")
}



