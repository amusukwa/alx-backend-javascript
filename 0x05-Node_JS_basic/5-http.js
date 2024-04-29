const http = require('http');
const { countStudents } = require('./3-read_file_async');

// Function to handle requests
function handleRequest(req, res, database) {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Check the URL path
    if (req.url === '/') {
        // Return "Hello Holberton School!" for the root path
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        // Return the list of students for the /students path
        countStudents(database)
            .then(() => {
                // Handle success: The list of students has been printed
                res.end();
            })
            .catch((error) => {
                // Handle error: Cannot load the database
                res.end(error.message);
            });
    } else {
        // Return a 404 Not Found error for unknown paths
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
}

// Create the HTTP server
const app = http.createServer((req, res) => {
    // Call the handleRequest function with the request, response, and database path
    handleRequest(req, res, process.argv[2]);
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Export the app variable
module.exports = app;

