# octalogicTech
Sure! Here’s a sample `README.md` for your full stack application:

---

# Full Stack Vehicle Booking Application

This repository contains a full stack application for vehicle booking, with a frontend built using React and Vite, and a backend built with Node.js, PostgreSQL, and Sequelize ORM. The frontend uses Material UI and Tailwind CSS for styling and Context API for state management.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Backend Structure](#backend-structure)
- [Frontend Structure](#frontend-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Vehicle Booking**: Book cars and bikes.
- **Non-overlapping Bookings**: Ensure no two bookings overlap for the same vehicle.
- **Dynamic Form**: A form with dynamic fields fetched from the backend.
- **Material UI and Tailwind CSS**: For a modern, responsive, and consistent design.
- **Context API**: For state management in the frontend.
- **Sequelize ORM**: For easy database interactions and migrations.

## Prerequisites

- Node.js
- PostgreSQL

## Installation

1. **Clone the repository:**
   ```https
   git clone https://github.com/Malik04121/octalogicTech.git
   cd octalogicTech
   ```

2. **Backend Setup:**
   ```http
   cd backend
   npm install
   ```

3. **Frontend Setup:**
   ```sh
   cd frontend
   npm install
   ```

## Running the Application

### Backend

1. **Setup PostgreSQL database:**
   Create a PostgreSQL database and note the connection URL.

2. **Configure environment variables:**
   Create a `.env` file in the `backend` directory and add your database connection URL:
   ```env
   DATABASE_URL=your_database_url
   ```

3. **Run migrations and seed data:**
   ```sh
   cd backend
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

4. **Start the backend server:**
   ```sh
   npm start
   ```

### Frontend

1. **Start the frontend server:**
   ```sh
   cd frontend
   npm run dev
   ```

## Backend Structure

- **Models**: Define database models and associations.
- **Migrations**: Database migrations using Sequelize.
- **Seeders**: Seed initial data for car types and bike types.
- **Routes**: Define API endpoints for booking and fetching vehicle data.
- **Controllers**: Handle business logic for routes.

## Frontend Structure

- **Components**: Reusable UI components using Material UI and Tailwind CSS.
- **Contexts**: State management using Context API.
- **Pages**: Form-based interface with one question per screen.
- **Services**: Functions to interact with backend APIs.

## Environment Variables

### Backend

Create a `.env` file in the `backend` directory with the following content:

```env
DATABASE_URL=your_database_url
PORT=your_port
```

### Frontend

Create a `.env` file in the `frontend` directory with the following content (if needed):

```env
VITE_API_URL=your_backend_api_url
```

## Contributing

Contributions are welcome! Please create an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to customize it further based on your specific requirements and project details.
