// Import the Express framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root path '/'
app.get('/', (req, res) => {
    // Send a response when the root path is accessed
    res.send("Hello From the Server Side....");
});

// Define a route for the '/about' path
app.get('/about', (req, res) => {
    // Send a response when the '/about' path is accessed
    res.send("Hello From the About us page....");
});

// Set the port number for the server
let port = 8000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening to ${port}...`);
});
