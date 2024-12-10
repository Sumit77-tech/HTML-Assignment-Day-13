// welcomeDate.js

// Display a welcome message
console.log("Welcome to Node.js!");

// Get the current date and time
const now = new Date();

// Format the date as YYYY-MM-DD HH:mm:ss
const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);

// Display the formatted date and time
console.log(`Current Date and Time: ${formattedDate}`);
