#!/bin/bash

# Create the database folder and file
mkdir -p /var/www/koa_app/data
touch /var/www/koa_app/data/database.sqlite
chmod 755 /var/www/koa_app/data
chmod 644 /var/www/koa_app/data/database.sqlite