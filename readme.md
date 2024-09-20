# Test task for Eliftech - backend

This repository contains the backend for an Event Management application. It serves as a test task to demonstrate the ability to manage events and participants through a set of RESTful APIs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [License](#license)

## Features

- CRUD operations for events
- Add participants to events
- Fetch participant data with filtering and sorting options
- Pagination for events and participants
- Validation of request bodies using Joi

## Technologies Used

- Node.js
- Express.js
- Mongoose (for MongoDB)
- Joi (for data validation)
- dotenv (for environment variables)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/event-management-backend.git
   cd event-management-backend
   ```

2. install the dependencies

```bash
npm install
```

3. create an .env file and add your enviroment variables like in `.env.example` file

4. start the server

   ```bash
   npm i
   //or
   npm run dev
   ```

### Live

If you cannot or don't want to clone project on your local machine, i`ve deployed it on Render.com by LINK

#### Warning

This is deployed on free version, so it can download realy slow

## API Endpoints

### Events

- GET /api/events - Fetch all events (with pagination and sorting)
- GET /api/events/:id - Fetch a specific event by ID

### Participants

- Post /api/events/:id/participants - Add neew participant to existing event

### Middleware

- Validation Middleware: Validates incoming request data using Joi schemas to ensure data integrity.
- Error Handling Middleware: Centralized error handling for better maintainability and clarity.

### Error Handling

Errors are handled centrally, returning a JSON response with a status code and error message. Validation errors will include specific messages detailing what went wrong.

## License

Feel free to copy and paste this directly into your README file!
