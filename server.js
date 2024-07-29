const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;  // Change the port number here

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form on the root route
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, age, message } = req.body;
    res.render('result', { name, email, age, message });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
