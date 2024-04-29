const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.trim().split('\n');

    // Initialize counters for each field
    let CSCount = 0;
    let SWECount = 0;
    const csList = [];
    const sweList = [];

    // Iterate over each line
    for (const line of lines) {
      // Split the line by comma
      const [firstName, lastName, age, field] = line.split(',');

      // Check if the line is not empty
      if (firstName && lastName && age && field) {
        // Increment the counter for the respective field
        if (field === 'CS') {
          CSCount += 1;
          csList.push(firstName);
        } else if (field === 'SWE') {
          SWECount += 1;
          sweList.push(firstName);
        }
      }
    }

    // Log the number of students and their lists
    console.log(`Number of students: ${CSCount + SWECount}`);
    console.log(`Number of students in CS: ${CSCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${SWECount}. List: ${sweList.join(', ')}`);
  } catch (error) {
    // If an error occurs (e.g., file not found), throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
