
package handlers

import (
	"github.com/gofiber/fiber/v2"
	"strings"
)

func AuthMiddleware() fiber.Handler {
	return func(c *fiber.Ctx) error {
		// Get the session ID from the request header
		sessionID := c.Get("Authorization")

		// Check if the session ID starts with "sess_"
		if !strings.HasPrefix(sessionID, "sess_") {
			// Session authentication failed, return an error response
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Unauthorized",
			})
		}

		// Continue to the next middleware or route handler
		return c.Next()
	}
}

