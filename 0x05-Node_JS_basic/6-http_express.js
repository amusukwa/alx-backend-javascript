// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello Holberton School!\n');
});

// Set the port to listen on
const PORT = 1245;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;
