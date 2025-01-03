#!/bin/bash

TABLE_NAME="users"
DB_PATH="/data/database.sqlite"

# SQL command to create the table
SQL_COMMAND="CREATE TABLE IF NOT EXISTS $TABLE_NAME (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT ''
);"

# Execute the SQL command
docker-compose exec sqlite_db sh -c "sqlite3 $DB_PATH \"$SQL_COMMAND\""

# Fill Test Data
docker-compose exec sqlite_db sh -c "sqlite3 $DB_PATH \"INSERT INTO $TABLE_NAME 
    (name, country)
    VALUES ('Alice', 'USA'),
    ('Ben', 'India'),
    ('Simon', 'Israel');\""

echo "Table $TABLE_NAME created and filled with TEST data successfully in $DB_PATH"