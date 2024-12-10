// Importing axios package
const axios = require('axios');

// Base URL of the API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to perform the automated testing
async function testApi() {
  try {
    // GET request to fetch all posts and log the title of the first post
    const getResponse = await axios.get(apiUrl);
    console.log('Title of the first post:', getResponse.data[0].title);

    // Data for the POST request
    const newPostData = {
      title: 'Automated Test Post',
      body: 'Testing API endpoints via Node.js script.',
      userId: 123
    };

    // POST request to create a new post
    const postResponse = await axios.post(apiUrl, newPostData);
    console.log('Created Post:', postResponse.data);
    console.log('Generated ID of the new post:', postResponse.data.id);
  } catch (error) {
    // Handling errors gracefully
    console.error('Error occurred:', error.message);
  }
}

// Execute the function
testApi();
