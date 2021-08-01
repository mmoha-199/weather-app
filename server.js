/* Empty JS object to act as endpoint for all routes */


// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
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
// create object to hold data
let projectData = {};
// GET route
app.get('/addCity', addCity);

function addCity (request, response) {
  response.send(projectData);
};

// POST route
app.post('/addCity', postCity);
 
function postCity (req, res) {
  projectData = req.body;
};