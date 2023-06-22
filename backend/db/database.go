package db

import (
	"log"
  
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
  
	"backend/app/models"
)

var (
	DB *gorm.DB
)

func InitDB(filepath string) {
	var err error
	DB, err = gorm.Open(sqlite.Open(filepath), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	err = DB.AutoMigrate(&models.Property{}, &models.Listing{})
	if err != nil {
		log.Fatal(err)
	}
}

