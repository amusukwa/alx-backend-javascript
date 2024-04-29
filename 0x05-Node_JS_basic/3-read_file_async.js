// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        let CSCount = 0;
        let SWECount = 0;
        const csList = [];
        const sweList = [];
        for (const line of lines) {
          const [firstName, lastName, age, field] = line.split(',');
          if (firstName && lastName && age && field) {
            if (field === 'CS') {
              CSCount += 1;
              csList.push(firstName);
            } else if (field === 'SWE') {
              SWECount += 1;
              sweList.push(firstName);
            }
          }
        }
        console.log(`Number of students: ${CSCount + SWECount}`);
        console.log(`Number of students in CS: ${CSCount}. List: ${csList.join(', ')}`);
        console.log(`Number of students in SWE: ${SWECount}. List: ${sweList.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
