package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"backend/app/models"
	"backend/app/handlers"

	"github.com/gofiber/fiber/v2"
)

func main() {
	db, err := gorm.Open(sqlite.Open("./test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}

	// Auto Migrate Database
	db.AutoMigrate(&models.Property{})

	app := fiber.New()

	handlers.SetupRoutes(app, db)

	app.Listen(":3000")
}

