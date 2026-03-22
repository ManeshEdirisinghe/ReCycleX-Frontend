# ReCycleX Frontend

React frontend for **ReCycleX** — a smart e-waste collection, pickup, repair, donation, and recycling management platform.

## Overview

This frontend provides the user interface for ReCycleX. It connects to a **FastAPI backend** and allows users to register, log in, add e-waste items, request pickups, track item progress, and access dashboards based on their role.

## Tech Stack

- React
- React Router DOM
- Axios
- Tailwind CSS or Bootstrap
- React Hook Form
- Context API or Redux Toolkit
- Recharts / Chart.js
- Vite or Create React App

## Core Features

- Responsive user interface
- User registration and login
- JWT-based authentication
- Role-based dashboards
- Add and manage e-waste items
- Pickup request form and tracking
- Admin management views
- Recycling / Repair Center dashboard
- Pickup Agent task management
- Rewards and impact summary pages
- API integration with FastAPI backend

## Suggested Project Structure

```bash
src/
├── assets/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── itemService.js
│   ├── pickupService.js
│   └── adminService.js
├── utils/
├── App.jsx
└── main.jsx
```

## Main Pages

### Public Pages
- Home Page
- About Page
- Login Page
- Register Page

### User Pages
- User Dashboard
- Add E-Waste Item
- My Items
- Pickup Request
- Tracking Page
- Rewards Page
- Profile Page

### Admin Pages
- Admin Dashboard
- Manage Users
- Manage Items
- Assign Centers
- Assign Pickup Agents
- Reports Page

### Recycling / Repair Center Pages
- Center Dashboard
- Assigned Items
- Update Processing Status

### Pickup Agent Pages
- Assigned Pickups
- Pickup Status Update

## Example Routes

```jsx
/
/about
/login
/register
/dashboard
/items
/items/add
/pickups
/tracking
/rewards
/profile
/admin/dashboard
/admin/users
/admin/items
/admin/reports
/center/dashboard
/center/items
/agent/pickups
```

## UI Components

- Navbar
- Sidebar
- Footer
- Item Card
- Pickup Request Form
- Status Badge
- Dashboard Summary Cards
- Charts and Reports
- Protected Route Component
- Role-Based Route Guard
- Loading Spinner / Skeleton
- Toast / Alert Messages

## Backend Integration

The frontend communicates with the **FastAPI backend** using Axios.

### Expected Backend Base URL

```bash
http://localhost:8000
```

### Recommended API Prefix

```bash
http://localhost:8000/api
```

## Environment Variables

If you are using **Vite**, create a `.env` file in the root of the frontend project:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

If you are using **Create React App**, use:

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

## Example Axios Setup

### `src/services/api.js`

```js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
```

## Authentication Flow

1. User registers or logs in from the frontend
2. FastAPI backend validates credentials
3. Backend returns an access token (JWT)
4. Frontend stores the token in local storage or another secure client-side store
5. Protected routes verify whether the user is authenticated
6. Role-based navigation and dashboard content are shown based on the logged-in user role

## Suggested API Usage

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Items
- `POST /api/items`
- `GET /api/items/my-items`
- `GET /api/items/{id}`
- `PUT /api/items/{id}`
- `DELETE /api/items/{id}`

### Pickups
- `POST /api/pickups`
- `GET /api/pickups/my-pickups`
- `GET /api/pickups/{id}`

### Admin
- `GET /api/admin/items`
- `PUT /api/admin/pickups/{id}/approve`
- `PUT /api/admin/pickups/{id}/assign-agent`
- `PUT /api/admin/items/{id}/assign-center`

### Processing / Centers
- `GET /api/center/items`
- `POST /api/processing`
- `PUT /api/processing/{id}`
- `GET /api/processing/item/{itemId}`

### Rewards / Certificates
- `GET /api/rewards/my-rewards`
- `GET /api/rewards/my-points`
- `GET /api/certificates/my-certificates`

## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js
- npm or yarn
- Git

Also make sure the **FastAPI backend** is running locally.

## Clone the Repository

```bash
git clone <your-frontend-repo-url>
cd recyclex-frontend
```

## Install Dependencies

```bash
npm install
```

## Start the Development Server

For Vite:

```bash
npm run dev
```

For Create React App:

```bash
npm start
```

The frontend usually runs on:

```bash
http://localhost:5173
```

or

```bash
http://localhost:3000
```

## FastAPI Backend Requirement

Make sure your backend is running before using the frontend.

Typical backend local address:

```bash
http://localhost:8000
```

FastAPI interactive API docs are usually available at:

```bash
http://localhost:8000/docs
```

## Protected Routes

Use protected route wrappers for:
- authenticated users
- admin-only pages
- pickup agent pages
- recycling / repair center pages

Example checks can include:
- token existence
- token validity
- user role

## Example Features by Role

### User
- Add electronic waste items
- Submit pickup requests
- Track item processing status
- View eco points and contributions
- Download or view certificates if available

### Admin
- View system statistics
- Manage users and items
- Approve pickups
- Assign centers and pickup agents
- Monitor overall processing activity

### Recycling / Repair Center
- View assigned items
- Update repair or recycling progress
- Add notes and final processing outcomes

### Pickup Agent
- View assigned pickup tasks
- Update pickup progress
- Confirm item collection

## Recommended Enhancements

- Token refresh handling
- Better error handling with toast notifications
- Pagination and filters for admin views
- File/image upload preview
- Map integration for pickup locations
- Dark mode support
- Dashboard charts for impact analytics

## Notes

- Keep the backend URL in environment variables, not hardcoded in components.
- Organize API calls inside the `services` folder.
- Keep route protection centralized.
- Store the logged-in user role after login to simplify role-based rendering.

## License

This project is for educational and portfolio purposes.
