// 4-http.js

const http = require('http');

const HOST = 'localhost';
const PORT = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('Hello Holberton School!\n');
});

// Export the server
module.exports = app;

// Listen on the specified port and host
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
