const express = require('express');
const app = express();
const prisma = require('@prisma/client');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Blog Platform');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
