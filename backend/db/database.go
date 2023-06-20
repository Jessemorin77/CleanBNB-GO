package db

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

var (
	// DBCon is the connection handle
	// for the database
	DBCon *sql.DB
)

func InitDB(filepath string) {
	var err error
	DBCon, err = sql.Open("sqlite3", filepath)
	if err != nil {
		log.Fatal(err)
	}

	statement, err := DBCon.Prepare(`
		CREATE TABLE IF NOT EXISTS properties(
			id TEXT PRIMARY KEY, 
			address TEXT, 
			city TEXT, 
			state TEXT, 
			zip INTEGER, 
			beds INTEGER, 
			baths INTEGER, 
			sqft INTEGER, 
			type TEXT, 
			status TEXT, 
			image TEXT, 
			desc TEXT
		);`)
	if err != nil {
		log.Fatal(err)
	}
	_, err = statement.Exec()
	if err != nil {
		log.Fatal(err)
	}
}

