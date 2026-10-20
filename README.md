# L'Oréal Claims Intelligence Engine

AI-powered cosmetic claims assessment platform built with NestJS, Prisma, and Ollama. The project helps evaluate product claims, structure claim-related data, and leverage local LLM capabilities for analysis and decision support.

## Overview

This repository contains a backend service for processing and assessing cosmetic claims using a combination of:

- NestJS for the application framework and API layer
- Prisma for database access and schema management
- Ollama for local AI inference and analysis
- TypeScript for application development

## Features

- API-driven claim assessment workflow
- Database-backed persistence with Prisma
- AI-assisted cosmetic claims analysis using Ollama
- Modular NestJS architecture for service and domain logic
- Environment-based configuration

## Tech Stack

- Node.js / TypeScript
- NestJS
- Prisma ORM
- PostgreSQL (or compatible relational database)
- Ollama
- Docker (optional for local development)

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm or pnpm or yarn
- PostgreSQL database
- Ollama installed and running locally

## Clone the Repository

```bash
git clone https://github.com/smileysravs222/loreal-claims-intelligence-engine.git
cd loreal-claims-intelligence-engine
```

## Install Dependencies

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the project root and configure the required variables. Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/loreal_claims"
PORT=3000
OLLAMA_BASE_URL="http://localhost:11434"
```

You may also need model-specific settings depending on your deployment and LLM configuration.

## Database Setup

Run Prisma migrations to initialize the database schema:

```bash
npx prisma migrate dev
```

To generate the Prisma client:

```bash
npx prisma generate
```

## Run the Application

Development mode:

```bash
npm run start:dev
```

Production mode:

```bash
npm run build
npm run start:prod
```

## Useful Scripts

```bash
npm run build
npm run start
npm run start:dev
npm run test
npm run lint
```

## Project Structure

```text
.
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── common/
│   ├── config/
│   ├── modules/
│   └── ...
├── .env.example
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

## Notes

This project is designed around AI-powered claim evaluation and can be extended with domain-specific validation, model prompts, and workflow orchestration.

## License

This project does not currently include a license file. If you are publishing or sharing it publicly, consider adding an appropriate open-source license.

## Contributing

Contributions are welcome. For major changes, please open an issue or discussion before making substantial updates.
