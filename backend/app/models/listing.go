package models

import "gorm.io/gorm"

type Listing struct {
	gorm.Model
	PropertyID string `json:"property_id"`
	Budget int `json:"budget"`
	Price int `json:"price"`
	Title string `json:"title"`
	Description string `json:"description"`
}

