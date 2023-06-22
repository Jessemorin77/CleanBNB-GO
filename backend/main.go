package main

import (
	"github.com/Jessemorin77/CleanBNB-GO/backend/app/models"
	"github.com/Jessemorin77/CleanBNB-GO/backend/app/handlers"
	"github.com/Jessemorin77/CleanBNB-GO/backend/app/db"

	"github.com/gofiber/fiber/v2"
)

func main() {
	db.InitDB("./test.db")

	app := fiber.New()

	handlers.SetupRoutes(app, db.DB)

	app.Listen(":3000")
}

