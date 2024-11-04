# Inventory Management System

## Overview
This project consists of a backend and a frontend (client) application. The backend is built with Node.js and Express, while the frontend is built with Vue.js.

## Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (v4.x or higher)

## Getting Started

### Backend Setup

1. **Clone the repository**:
  ```sh
  git clone https://github.com/lesterivan/inv-management.git
  cd inv-management

2. **Install dependencies**:
  ```sh
  npm install

3. **Create a .env file in the root directory**:
  ```sh
  touch .env

  // Add the following environment variables to the .env file:
  PORT=4000
  MONGODB_URI=mongodb://localhost:27017/your-database-name # (ask your supervisor)
  JWT_SECRET=your_jwt_secret # (ask your supervisor)

4. **Run the backend server**:
  ```sh
  npm run dev


Frontend (Client) Setup
1. **Navigate to the client directory**:
  ```sh
  cd ../client

2. **Install dependencies**:
  ```sh
  npm install

3. **Run the frontend development server**:
  ```sh
  npm run dev