# Innoma Healthcare Backend

Industry-level Node.js/Express backend with TypeScript, Sequelize (PostgreSQL), Redis, and Firebase.

## Tech Stack

- **Node.js**: Runtime
- **Express**: Web Framework
- **TypeScript**: Type Safety
- **Sequelize**: ORM for PostgreSQL
- **Redis**: Caching and Sessions
- **AWS S3**: Scalable File Storage
- **Firebase Admin SDK**: Enterprise-grade Auth
- **Zod**: Schema Validation
- **Winston**: Structured Logging

## Getting Started

### 1. Prerequsites

- Node.js (v16+)
- Docker (for local DB and Redis)

### 2. Setup Environment

Copy `.env.example` to `.env` and fill in the values.

```bash
cp .env.example .env
```

### 3. Spin up Infrastructure

```bash
docker-compose up -d
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

## Project Structure

- `src/config`: Connection configs (DB, Redis, S3, Firebase)
- `src/controllers`: Request handlers
- `src/services`: Business logic
- `src/models`: Database models
- `src/middlewares`: Custom middlewares (Auth, Error, Validation)
- `src/utils`: Utilities (Logger, etc.)

## API Endpoints

- `GET /health`: Health check
