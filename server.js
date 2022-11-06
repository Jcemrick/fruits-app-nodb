//*************************************** */ 
// Import Dependencies
// Bringing in Libraries or Assets exported by others files into this file
//*************************************** */
const express = require('express');


//*************************************** */
// Create the Express App object
// All Middleware and Routes must be registered with App
// App tracks all the things the app does when a request is received
//*************************************** */
const app = express();

//*************************************** */
// The Data AKA the Model in Models, Views, Controllers (MVC)
// Using a basic array since not yet using a database 
//*************************************** */
const fruits = ['apple', 'banana', 'pear'];


//*************************************** */
// Routes and Routers
// These determine how diffent requests are responded to
// They are matched pased on path (/path) and method (GET/POST/PUT/DELETE)
//*************************************** */
app.get('/fruits/', (req, res) => {
    res.send(fruits);
});


//*************************************** */
// The Server Listener
// This turns on the server to listen for a requests on a particular port
//*************************************** */
const PORT = process.env.PORT || 3000 // set port to value from environment or 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});