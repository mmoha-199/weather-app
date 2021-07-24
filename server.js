/* Empty JS object to act as endpoint for all routes */
weathData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

// Spin up the server
const server = app.listen(port, listening);
function listening(){
    console.log('server running');
    console.log(`running on localhost:${port}`);
};
//GET
app.get('/url', (req, res)=> {
    res.send(weathData);
});
//POST
//create a POST route that uses the url /add and sends the response POST received when used to make a request.
app.post('/add', callBack);
  
function callBack(req,res){
  res.send('POST received');
};
//Add a POST route for adding a favorite animal via the path ’/animal’ to an array named data.
const data = [];
app.post('/animal', sendAnimal);
function sendAnimal(req,res){
    data.push(req.body);
}
// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route