Dues Dude

Dues Dude is a bill-splitting application designed to help users easily manage and divide expenses. The project is built using Next.js for both the frontend and backend, with MongoDB as the database.

🚀 Project Architecture

Frontend: Next.js (React)

Backend: Next.js (API Routes)

Database: MongoDB

Monorepo: Managed using Turborepo

📂 Folder Structure

DuesDude/
│── apps/
│   ├── frontend/   # Frontend (Next.js)
│   ├── backend/    # Backend (Next.js API)
│── packages/
│   ├── ui/         # Shared UI components
│── turbo.json      # Turborepo configuration
│── package.json    # Root package manager

🔧 Setup Instructions

1️⃣ Install Dependencies

Run the following command in the root folder to install dependencies for all packages:

npm install

2️⃣ Start the Development Servers

Run the following command in the root folder to start both the frontend and backend simultaneously:

npm run dev

This will start:

Frontend on http://localhost:3000

Backend on http://localhost:3001

3️⃣ Environment Variables

Create .env.local files inside both apps/frontend and apps/backend with the required variables.

Backend (apps/backend/.env.local)

MONGODB_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/mydatabase

4️⃣ Testing API Connection

You can test the backend by visiting:

http://localhost:3001/api/test

It should return:

{ "message": "Connected to MongoDB successfully!" }

5️⃣ Using Shared UI Components

The packages/ui package contains shared components such as buttons. Example usage in apps/frontend/app/page.tsx:

import { Button } from "@repo/ui";

export default function Home() {
  return <Button onClick={() => alert("Hello World!")}>Click Me</Button>;
}

✅ Contributions

Feel free to contribute by submitting a pull request!