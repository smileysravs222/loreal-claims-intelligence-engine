# L'Oréal Claims Intelligence Engine

This repository contains a local web application for assessing whether clinical evidence supports cosmetic product claims. The React frontend collects a claim and its evidence; the NestJS backend uses a local Ollama model to generate an assessment and stores claims and results in a SQLite database through Prisma.

## Run locally

### Prerequisites

- Node.js and npm
- [Ollama](https://ollama.com/download)

### 1. Start Ollama

Download the model used by default:

```sh
ollama pull llama3.2
```

Make sure Ollama is running locally and the model is available.

### 2. Set up and start the backend

In a terminal, change to the `backend` directory and install dependencies:

```sh
cd backend
npm install
```

Create a `.env` file in `backend/` with the local database and Ollama settings:

```dotenv
DATABASE_URL="file:./dev.db"
OLLAMA_BASE_URL="http://localhost:11434/v1"
OLLAMA_MODEL="llama3.2"
```

Generate the Prisma client, apply the database migrations, and start the backend:

```sh
npx prisma generate
npx prisma migrate deploy
npm run start:dev
```

The backend listens on `http://localhost:3000`.

### 3. Set up and start the frontend

In a separate terminal, change to the `frontend` directory, install dependencies, and start the Vite development server:

```sh
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). The frontend sends assessment requests to the backend on port 3000, so keep both services and Ollama running while using the app.
