package handlers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"

	"backend/app/models"
)

type ListingHandler struct {
	db *gorm.DB
}

func NewListingHandler(db *gorm.DB) *ListingHandler {
	return &ListingHandler{db: db}
}

func (h *ListingHandler) CreateListing(c *fiber.Ctx) error {
	var listing models.Listing
	if err := c.BodyParser(&listing); err != nil {
		fmt.Println("Error parsing request body:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
	}

	fmt.Println("Received listing data:", listing)

	if err := h.db.Create(&listing).Error; err != nil {
		fmt.Println("Error creating listing:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error creating the listing"})
	}

	fmt.Println("Listing created successfully:", listing)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{"data": listing})
}

func (h *ListingHandler) GetListing(c *fiber.Ctx) error {
	var listings []models.Listing
	if err := h.db.Find(&listings).Error; err != nil {
		fmt.Println("Error retrieving listings:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error retrieving the listings"})
	}

	fmt.Println("Retrieved listings:", listings)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{"data": listings})
}

