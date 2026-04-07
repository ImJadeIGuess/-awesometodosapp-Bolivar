# 📝 Awesome-Todos

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Awesome-Todos is a simple yet powerful full-stack Todo app built using the MERN stack (MongoDB, Express, React, Node.js).
It’s designed to feel smooth, responsive, and reliable—whether you're just jotting down tasks or managing a full list.

📑 What’s inside?
Features
Tech Stack
What you need
Setup Guide
How to Run
Common Issues
Deployment
✨ Features
Full CRUD functionality – create, edit, delete, and manage todos easily
Real-time database powered by MongoDB Atlas
Clean and responsive UI using React
REST API backend with Express handling all requests
🛠 Tech Stack
Frontend: React, CSS
Backend: Node.js, Express
Database: MongoDB Atlas
Tools: Git, npm, Render
📋 What you need

Before running the app, make sure you have:

Node.js (v14 or newer)
npm (comes with Node)
A MongoDB Atlas account + connection string
⚙️ Setup Guide

You’ll be working with two parts:
👉 the server (backend)
👉 the client (frontend)

It’s best to open two terminals.

🔹 Backend Setup
cd server
npm install

Create a .env file inside the server folder:

MONGODB_URI=your_mongodb_connection_string_here
PORT=5000

(Just replace the URI with your own MongoDB connection string.)

🔹 Frontend Setup
cd client
npm install
▶️ How to Run

⚠️ Important: You need to run both backend and frontend at the same time.

1. Start the Server
cd server
npm start

Wait until you see:

Connected to MongoDB
Server is listening on http://localhost:5000

Leave this running.

2. Start the Client

Open another terminal:

cd client
npm start

Your app should open automatically at:

http://localhost:3000
❗ Common Issues
🚫 ECONNREFUSED / Proxy Error

What’s happening?
Your frontend is trying to connect to the backend… but the backend isn’t running.

Fix:

Make sure the server is running
Restart it if it crashed
🌐 MongoDB Connection Timeout

If your database randomly fails to connect, it might be a DNS issue.

This project already includes a fix using:

dns.setServers(['8.8.8.8'])

This forces a stable DNS (Google’s), which helps avoid connection problems on some networks.

🚀 Deployment (Render)

The easiest way to deploy this app is using Render.

Step 1: Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/awesome-todos.git
git push -u origin master
Step 2: Deploy on Render
Sign up on Render
Create a Web Service
Connect your GitHub repo

Settings:

Build Command

cd client && npm install && npm run build && mv build ../server/ && cd ../server && npm install

Start Command

cd server && node index.js

Environment Variables

MONGODB_URI
PORT=5000
🔧 Improvements & Fixes
🛡 Backend Stability
Server now checks MongoDB connection on startup
Uses try-catch in all routes
Prevents crashes and returns proper error responses
💻 Frontend Resilience
React app won’t crash if backend is down
Errors are logged instead of breaking the UI
🔐 Environment Config
.env stores sensitive data like MongoDB URI
Added DNS fix (8.8.8.8) to prevent connection issues
📜 Git History (What went wrong before)
Problems:
node_modules was included (too large ❌)
Git history got messy
Branch wasn’t linked properly
Fix:
Removed node_modules and added .gitignore
Cleaned commit history
Force pushed a fresh version
Re-linked branch with:
git push --set-upstream origin main
💡 Final Notes

This project is a solid starting point if you’re learning MERN stack development.
It covers both frontend and backend basics while also dealing with real-world issues like deployment and debugging.
