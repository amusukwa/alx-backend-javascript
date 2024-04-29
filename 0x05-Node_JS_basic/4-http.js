// 4-http.js

const http = require('http');

const PORT = 3000;

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
