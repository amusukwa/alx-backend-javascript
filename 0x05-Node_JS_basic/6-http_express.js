const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(1245);

// Export the app variable
module.exports = app;
