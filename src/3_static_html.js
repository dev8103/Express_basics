const express = require('express');
const path = require('path');
const app = express();

const StaticPath = path.join(__dirname,'../public');
app.use(express.static(StaticPath));

app.get('/',(req,res)=>{
    res.send('Home Page');
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Listening to the port no. ${PORT}`);
});

