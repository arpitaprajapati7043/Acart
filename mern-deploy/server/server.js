// server.js
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const dbConnection = require('./dbConnection');

// Middleware
const allowedOrigins = ['http://localhost:3000']; // Add other origins if needed
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Connect to the database
dbConnection();

// Your routes and middleware go here...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Route for JSON response
app.get("/", (req, res) => {
  res.status(200).json({ message: 'Connect to backend' });
});
