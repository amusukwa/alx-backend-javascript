// 4-http.js

const http = require('http');

const PORT = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
});

// Export the server
module.exports = app;

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
