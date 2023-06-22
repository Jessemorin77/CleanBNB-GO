package handlers

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"

	"backend/app/models"
)

type PropertyHandler struct {
	db *gorm.DB
}

func NewPropertyHandler(db *gorm.DB) *PropertyHandler {
	return &PropertyHandler{db: db}
}

func (h *PropertyHandler) CreateProperty(c *fiber.Ctx) error {
	var property models.Property
	if err := c.BodyParser(&property); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
	}

	if err := h.db.Create(&property).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error creating the property"})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{"data": property})
}

func (h *PropertyHandler) GetProperties(c *fiber.Ctx) error {
	var properties []models.Property
	if err := h.db.Find(&properties).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error retrieving the properties"})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{"data": properties})
}
