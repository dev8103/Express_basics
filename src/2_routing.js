// Importing the Express.js framework
const express = require('express');
// Creating an instance of the Express application
const app = express();

// Uncomment the line below to print the current directory path to the console
// console.log(__dirname);

// Define a route for the home page
app.get('/', (req, res) => {
    // Send a simple response for the home page
    res.send('Home Page');
});

// Define a route for the about us page
app.get('/aboutus', (req, res) => {
    // Send a simple response for the about us page
    res.send('About Us Page');
});

// Define a route for the contact page
app.get('/contact', (req, res) => {
    // Send a JSON response with an array of contact information
    res.send([
        {
            name: 'dev',
            id: 3,
        },
        {
            name: 'dev',
            id: 3,
        },
    ]);

    // we can use res.json() for sending json content;
    // Note: res.json() automatically sets the 'Content-Type' header to 'application/json'
});

// Specify the port number for the server to listen on
const PORT = 3000;
// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Print a message to the console when the server is successfully running
    console.log(`Listening to the port no. ${PORT}`);
});
