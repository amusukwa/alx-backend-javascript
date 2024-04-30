const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Listen on the specified port
app.listen(1245);

// Export the server
module.exports = app;
