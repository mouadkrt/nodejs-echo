const express = require('express');
const xmlparser = require('express-xml-bodyparser');

const app = express();

// Use the XML body parser middleware
app.use(xmlparser());

// Define a POST route to handle incoming XML data
app.post('/', (req, res) => {
    // Log the raw XML received
    console.log('Raw XML:', req.rawBody);
    
    // Respond with the same XML data
    res.type('application/xml');
    res.send(req.rawBody);
});

app.post('/raw', (req, res) => {
    console.log('Raw:', req.rawBody);
    res.send(req.rawBody);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
