package handlers

import (
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
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "err.Error()"})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{"data": listing})
}

func (h *ListingHandler) GetListing(c *fiber.Ctx) error {
	var listings []models.Listing
	if err := h.db.Find(&listings).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error retrieving the listings"})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{"data": listings})
}