# 🛠️ MediQueue — Backend API

> RESTful API server powering the MediQueue tutor booking platform. Handles authentication, tutor management, and session booking with protected routes and robust data validation.

---

## 🔗 Related Repositories

- **Frontend (Next.js):** [Client Repo](https://github.com/devsWithRafi/ProgrammingHero-batch13-All-Assainmets/tree/main/assainment-9/client) | [Live Demo](https://mediqueue-a9.vercel.app/)
- **Backend (This repo):** [Server Repo](https://github.com/devsWithRafi/ProgrammingHero-batch13-All-Assainmets/tree/main/assainment-9/server)


## 📡 Base URL

```
http://localhost:7000
```

## 🚀 API Endpoints

### 👨‍🎓 Tutors — `/api/tutor`

| Method   | Endpoint            | Auth        | Description                                  |
| -------- | ------------------- | ----------- | -------------------------------------------- |
| `POST`   | `/create`           | ✅ Required | Create a new tutor profile                   |
| `GET`    | `/get-tutors`       | ❌ Public   | Get all available tutors                     |
| `GET`    | `/get-tutors/:id`   | ✅ Required | Get a single tutor by ID                     |
| `GET`    | `/my-tutors`        | ✅ Required | Get all tutors created by the logged-in user |
| `PUT`    | `/update-tutor/:id` | ✅ Required | Update a tutor's details                     |
| `DELETE` | `/delete-tutor/:id` | ✅ Required | Delete a tutor profile                       |

### 📅 Bookings — `/api/booking`

| Method  | Endpoint              | Auth        | Description                                   |
| ------- | --------------------- | ----------- | --------------------------------------------- |
| `POST`  | `/create`             | ✅ Required | Book a new session with a tutor               |
| `GET`   | `/book-sessions`      | ✅ Required | Get all sessions booked by the logged-in user |
| `PATCH` | `/cancel-session/:id` | ✅ Required | Cancel an existing booked session             |

---

## 🔐 Authentication

All protected routes require a valid session token issued by **Better Auth**.

Include the token in the request header:

```http
Authorization: Bearer <your_token>
```

Requests to protected routes without a valid token will return:

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

---

## 🛠️ Tech Stack

| Layer          | Technology               |
| -------------- | ------------------------ |
| **Runtime**    | Node.js                  |
| **Framework**  | Express.js v5            |
| **Database**   | MongoDB + Mongoose       |
| **Auth**       | Better Auth + jose (JWT) |
| **Validation** | Zod                      |
| **CORS**       | cors                     |
| **Config**     | dotenv                   |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/devsWithRafi/ProgrammingHero-batch13-All-Assainmets.git
cd assainment-9/server

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server
PORT=7000

# Client Origin
CLIENT_URL=http://localhost:3000

# Database
MONGODB_URI=your_mongodb_connection_string
```

### Run the Server

```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```

Server will be running at http://localhost:7000

---

## 🛡️ Middleware

### `authMiddlewere`

Validates the incoming request's session token using **Better Auth** and **jose**.

- Decodes and verifies the JWT from the `Authorization` header or cookie
- Attaches the authenticated user object to `req.user`
- Returns `401 Unauthorized` if the token is missing, expired, or invalid
- Applied to all write operations and user-specific data fetches


## 📦 Key Dependencies

```json
{
  "express": "^5.2.1",
  "mongoose": "^9.6.2",
  "mongodb": "^7.2.0",
  "better-auth": "^1.6.11",
  "jose": "^6.2.3",
  "zod": "^4.4.3",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2"
}
```


> Built with ❤️ by Saiful Islam Rafi. If this helped you, drop a ⭐ on GitHub!

---