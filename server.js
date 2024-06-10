// server.js
const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5060;

// Serve static files from the "data" directory
app.use('/api/v1/data', express.static(path.join(__dirname, 'data')));

app.get('/', (req, res) => {
    res.send('Welcome to the JSON Data Server');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});