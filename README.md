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

### 3. Configure Environment Variables
A sample file .env.example is provided. Create your own .env file:
```bash
cp .env.example .env.local
```
The actual environment variable values (e.g. Supabase credentials) will be shared with you privately.

### 4. Run the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the app.

### 5. (Optional) Reset the database

If needed, you can reset and seed the database using the following command:

```bash
npm run reset-db
```

## Docker Setup
### 1. Build the Docker image
```bash
docker build -t nextjs-app .
```

### 2. Run the Docker container
```bash
docker run -p 3000:3000 nextjs-app
```

## Database
This project uses Supabase as its backend database.

You will need a Supabase project and the relevant API keys to connect properly. The Supabase configuration is stored in environment variables.
