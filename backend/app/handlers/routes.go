package handlers

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func SetupRoutes(app *fiber.App, db *gorm.DB) {
	propertyHandler := NewPropertyHandler(db)
	listingHandler := NewListingHandler(db)

	//Property Routes
	app.Post("/properties", propertyHandler.CreateProperty)
	app.Get("/properties", propertyHandler.GetProperties)

	//Listing Routes
	app.Post("/listings", listingHandler.CreateListing)	
	app.Get("/listings", listingHandler.GetListing)

	//Bid Routes

	//Chat Routes
}
