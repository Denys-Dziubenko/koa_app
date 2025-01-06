# Koa App

## 1. Prerequisites

- Install [Docker](https://docs.docker.com/get-docker/)
- Install [Docker Compose](https://docs.docker.com/compose/install/)
- Install dependencies to run tests: `npm install --only=dev`

## 2. Setup

### Create Database Directory

Execute the following script to create the database directory with the necessary permissions:

```bash
sh scripts/init_data.sh
```

Execute the following script to create table with required fields:

```bash
sh scripts/init_table.sh
```

#### Important: The database launched in docker, so before running this script start the project with docker-compose

- `npm run run_docker_compose`

## 3. Launching:

### Docker Compose

To build and run the application using Docker Compose, use the following command:

- `npm run run_docker_compose`

To stop the Docker Compose services, use the following command:

- `npm run stop_docker_compose`

Rebuild and Restart Docker Compose Containers:

- `npm run rebuild_docker_compose`

## 4. Testing

### To run the tests, use the following command:

- `npm test`

## 5. API Endpoints

### Create User

 - **URL:** `/api/v1/add-user`
 - **Method:** `POST`
 - **Body Parameters:**
    - `name` (string): The name of the user
    - `country` (string): The country of the user

### Get Users List

 - **URL:** `/api/v1/get-users-list`
 - **Method**: `GET`
 - **Query Parameters:**
    - `limit` (integer): The number of users to return
    - `offset` (integer): The number of users to skip

### Get User by ID

 - **URL:** `/api/v1/get-user/:id`
 - **Method:** `GET`
 - **URL Parameters:**
    - `id` (integer): The ID of the user

### Delete User by ID

 - **URL:** `/api/v1/delete-user/:id`
 - **Method:** `DELETE`
 - **URL Parameters:**
    - `id` (integer): The ID of the user
 - **Headers:**
    - `x-auth-key (string):` The authentication key

## 6. Configs

The application configuration is managed using the config package. You can find the configuration files in the config directory.

