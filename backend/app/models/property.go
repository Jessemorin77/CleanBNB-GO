package models

import "gorm.io/gorm"

type Property struct {
	gorm.Model
	Address string `json:"address"`
	City    string `json:"city"`
	State   string `json:"state"`
	Zip     int    `json:"zip"`
	Beds    int    `json:"beds"`
	Baths   int    `json:"baths"`
	Sqft    int    `json:"sqft"`
	Type    string `json:"type"`
	Status  string `json:"status"`
	Image   string `json:"image"`
	Desc    string `json:"desc"`
}

