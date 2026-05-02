// Import required dependencies
const express = require('express');  // Web framework for building APIs
const mongoose = require('mongoose');  // MongoDB object modeling
const app = express();  // Create an Express application
const PORT = process.env.PORT || 5000;  // Set server port from environment or default to 5000
// Connect to MongoDB database
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log('Connected to MongoDB');  // Log successful connection
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);  // Log connection errors
});
// Import middleware packages
const cookies = require('cookie-parser');  // Middleware for parsing cookies
const cors = require('cors');  // Middleware for Cross-Origin Resource Sharing
const cookieParser = require('cookie-parser');  // Cookie parsing middleware

// Configure CORS to allow requests from the React frontend
app.use(cors({
    origin: 'http://localhost:5174',  // Allow requests from this origin (React dev server)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Express', 'pragma'],  // Allow these headers
    credentials: true  // Allow credentials (cookies, auth headers)
}));

// Apply middleware for parsing and handling requests
app.use(cookies());  // Parse cookies from incoming requests
app.use(express.json());  // Parse JSON request bodies
app.use(cookieParser());  // Parse cookies (middleware)
// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  // Log the port the server is listening on
});