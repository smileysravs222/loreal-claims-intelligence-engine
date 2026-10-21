# L'Oréal Claims Intelligence Engine

AI-powered cosmetic claims assessment platform for evaluating whether product claims are supported by evidence, using a NestJS backend, Prisma data layer, and local Ollama-based AI inference.

## Repository layout

```text
.
├── backend/          # NestJS API and Prisma schema
├── frontend/         # React + Vite client app
├── README.md         # Project overview
├── .gitignore        # Shared ignore rules
└── LICENSE           # Add if needed for distribution
```

## Stack

- Backend: NestJS + TypeScript + Prisma
- AI: Ollama
- Frontend: React + Vite
- Database: PostgreSQL-compatible relational database

## Getting started

### 1) Backend

```bash
cd backend
npm install
cp .env.example .env
npm run start:dev
```

For Prisma setup:

```bash
npx prisma generate
npx prisma migrate dev
```

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment variables

Backend configuration should be defined in `backend/.env` using the provided `backend/.env.example` as a reference. The app expects database and model settings, especially for Prisma and Ollama.

## Notes

- The backend is the primary application service and should be run before using the frontend.
- Keep local secrets and `.env` files out of version control.
- This repository is structured as a monorepo with separate backend and frontend services.

## Recommended cleanup checklist

- Keep environment files under each app directory rather than committing them.
- Use app-specific READMEs for backend/frontend guidance.
- Keep generated files, lockfiles, and build artifacts out of source control where appropriate.
- Add a project license if the code will be shared publicly.
