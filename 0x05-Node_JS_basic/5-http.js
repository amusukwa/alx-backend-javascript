const http = require('http');
const { countStudents } = require('./3-read_file_async');

function handleRequest(req, res, database) {
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL path
  if (req.url === '/') {
    res.end('Hello Holberton School!');
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
    res.setHeader(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}

const app = http.createServer((req, res) => {
  handleRequest(req, res, process.argv[2]);
});

app.listen(1245);

module.exports = app;
