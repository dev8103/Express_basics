// Import required modules
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require('request');
// Create an Express application
const app = express();
const PORT = 3000;

const templatepath =  path.join(__dirname,'../templates/views');
const StaticPath = path.join(__dirname,'../public');
const partialsPath = path.join(__dirname,'../templates/partials');

// spelling must be same as down
// Set the view engine to handlebars (hbs)
app.set('view engine', 'hbs');
// we can also change the name of view to anything else
app.set('views',templatepath);

hbs.registerPartials(partialsPath);

// static path for rendering external css in dynamic website
app.use(express.static(StaticPath));


// Define a route for the root path ('/')
app.get('/', (req, res) => {
    // Render the 'index' view and pass data to it
    res.render('index', {
        channelName: 'Dev Hingu',
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        channelName : req.query.name,
    });
});

app.get('/temp',(req,res)=>{

});

app.get('*',(req,res)=>{
    res.render('404',{
        errorComment : 'Oops Page Not Found....',
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Listening to the port no. ${PORT}`);
});
