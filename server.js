//*************************************** */ 
// Import Dependencies
// Bringing in Libraries or Assets exported by others files into this file
//*************************************** */
require("dotenv").config() // load variables from .env into process.env
const express = require('express'); // backend framework
const fruits = require("./models/fruits") // import fruits data


//*************************************** */
// Create the Express App object
// All Middleware and Routes must be registered with App
// App tracks all the things the app does when a request is received
//*************************************** */
const app = express();


//*************************************** */
// Routes and Routers
// These determine how diffent requests are responded to
// They are matched pased on path (/path) and method (GET/POST/PUT/DELETE)
//*************************************** */

// HOME ROUTE - Just redirects you to fruits index for now
app.get("/", (req, res) => res.redirect("/fruits"))

// INDEX ROUTE - GET to /fruits - Returns all fruits
app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//SHOW ROUTE - GET to /fruits - Returns a single fruit
app.get('/fruits/:index', (req, res) => {
    // res.render(template, data)
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});


//*************************************** */
// The Server Listener
// This turns on the server to listen for a requests on a particular port
//*************************************** */
const PORT = process.env.PORT || 3000 // set port to value from environment or 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});