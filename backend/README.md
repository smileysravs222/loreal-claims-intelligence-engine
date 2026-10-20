# L'Oréal Claims Intelligence Engine

A backend service that evaluates cosmetic product claims using structured evidence and local AI inference.

## Overview

This project exposes an API for assessing whether evidence supports or refutes a given cosmetic claim. It uses NestJS for the application layer and Prisma for database access, with Ollama as the local model provider for claim analysis.

## Features

- REST API for claim evaluation
- NestJS application architecture
- Prisma ORM integration
- Local AI-based assessment using Ollama
- Request validation and structured results

## Prerequisites

- Node.js 18+
- npm
- PostgreSQL-compatible database
- Ollama installed and running locally

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Then configure your local environment in `.env`.

## Database and Prisma

Generate the Prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

## Run the app

Development mode:

```bash
npm run start:dev
```

Production build:

```bash
npm run build
npm run start:prod
```

## Testing

```bash
npm run test
```

## AI configuration

This project is designed to use Ollama by default for local LLM-based claim assessment. Ensure that the configured model is available before running the application.

## Notes

- Do not commit `.env` files or other local secrets.
- Keep model configuration aligned with your local Ollama setup.
- This backend is intended to be used alongside the frontend app in this repository.
