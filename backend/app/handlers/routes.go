
package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/session"
  "gorm.io/gorm"
)

func SetupRoutes(app *fiber.App, db *gorm.DB) {
	propertyHandler := NewPropertyHandler(db)
	listingHandler := NewListingHandler(db)

	propertyRoutes := app.Group("/properties")
	propertyRoutes.Use(session.New())
	propertyRoutes.Use(AuthMiddleware())

	listingRoutes := app.Group("/listings")
	listingRoutes.Use(session.New())
	listingRoutes.Use(AuthMiddleware())

	// Property Routes
	propertyRoutes.Post("/", propertyHandler.CreateProperty)
	propertyRoutes.Get("/", propertyHandler.GetProperties)

	// Listing Routes
	listingRoutes.Post("/", listingHandler.CreateListing)
	listingRoutes.Get("/", listingHandler.GetListing)

	// Bid Routes

	// Chat Routes
}


