const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a route handler for the /students path
app.get('/students', (req, res) => {
  // Call countStudents function passing the database file as argument
  countStudents(process.argv[2])
    .then((message) => {
      res.send(`This is a list of students\n${message}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
