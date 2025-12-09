# API Service

Main backend API service built with Node.js and Express.

## Features

- RESTful API endpoints
- JWT authentication
- MongoDB integration
- Rate limiting
- CORS support

## Setup

```bash
npm install
npm start
```

## Environment Variables

Create a `.env` file with:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/auth/login` - User login
- `GET /api/users` - Get all users (authenticated)
- `GET /api/services/status` - Get service status

## Tech Stack

- Node.js
- Express
- MongoDB
- JWT for authentication
