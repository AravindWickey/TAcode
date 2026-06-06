# Full Stack Application (React + Node.js)

This repository contains both the frontend and backend applications.

## Project Structure

```text
project-root/
│
├── frontend/     # React Application
│
├── backend/      # Node.js / Express API
│
└── README.md
```

---

## Prerequisites

Before running the project, make sure the following are installed:

* Node.js (v18 or later recommended)
* npm

Verify installation:

```bash
node -v
npm -v
```

---

## Frontend Setup (React)

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The frontend application will run on:

```text
http://localhost:3000
```

---

## Backend Setup (Node.js)

Open a new terminal and navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure the required environment variables.

Example:

```env
PORT=5000
DATABASE_URL=<your_database_connection_string>
```

Start the backend server:

```bash
npm start
```

or

```bash
npm run dev
```

The backend API will run on:

```text
http://localhost:5000
```

---

## Running the Application

### Terminal 1

```bash
cd frontend
npm install
npm start
```

### Terminal 2

```bash
cd backend
npm install
npm run dev
```

---

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

---

## Notes

* `node_modules` folders are intentionally excluded from version control.
* Run `npm install` separately inside both `frontend` and `backend` directories before starting the application.
* Ensure all required environment variables are configured before running the backend.
