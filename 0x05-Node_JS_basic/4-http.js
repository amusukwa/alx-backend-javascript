const http = require('http');

const PORT = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
});

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the server
module.exports = app;
