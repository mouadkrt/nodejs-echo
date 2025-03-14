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

app.post('/v1/raw', (req, res) => {
    console.log('v1 Raw:', req.rawBody);
    res.send(req.rawBody);
});

app.post('/v1/req', (req, res) => {
    console.log('v1 Req:', req);
    res.send(req);
});

app.get('/get', (req, res) => {
    console.log('Raw:', req.rawBody);
    res.send(req.rawBody);
});

app.post('/req', (req, res) => {
    console.log('Req:', req);
});


app.get('/400', (req, res) => { res.status(400).send("response muis 400"); });
app.get('/401', (req, res) => { res.status(401).send("response muis 401"); });
app.get('/403', (req, res) => { res.status(403).send("response muis 403"); });
app.get('/500', (req, res) => { res.status(500).send("response muis 500"); });
app.get('/503', (req, res) => { res.status(503).send("response muis 503"); });

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
