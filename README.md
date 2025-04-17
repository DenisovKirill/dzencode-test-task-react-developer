# dZENcode Test Task - React Developer

## Description

This project is a test task for the position of **React Developer**. It demonstrates working with Next.js, React components, routing, and database integration using Supabase.
Additionally, it uses **Server-Sent Events (SSE)** to show the number of active sessions in real time across different browser instances instead of **Socket.io**, as the project is based on Next.js and deployed on Vercel.

## Live Demo

🔗 [Click here to view the deployed app](https://dzencode-test-task-react-developer-roel6j0oy.vercel.app/products)


## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/DenisovKirill/dzencode-test-task-react-developer.git
cd dzencode-test-task-react-developer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the app.

## Docker Setup
### Build the Docker image
```bash
docker build -t nextjs-app .
```

### Run the Docker container
```bash
docker run -p 3000:3000 nextjs-app
```

## Environment Variables
A sample file .env.example is provided. Create your own .env file:
```bash
cp .env.example .env
```

## Database
This project uses Supabase as its backend database.

You will need a Supabase project and the relevant API keys to connect properly. The Supabase configuration is stored in environment variables.
