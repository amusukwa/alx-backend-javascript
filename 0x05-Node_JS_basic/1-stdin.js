// 1-stdin.js

// Define the function
function promptName() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  process.stdin.setEncoding('utf8');

  process.stdin.once('data', (input) => {
    const name = input.trim();

    if (name) {
      process.stdout.write(`Your name is: ${name}\n`);
      process.stdout.write('This important software is now closing\n');
      process.exit(0);
    }
  });
}

// Export the function
module.exports = promptName;

// Call the function if the script is executed directly
if (require.main === module) {
  promptName();
}
