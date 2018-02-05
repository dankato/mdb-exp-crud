const express = require('express');
const app = express();
const port = 3000;

// READ (path, callback)
app.get('/', (req, res) => {
    console.log('Get it!');
    res.sendFile(__dirname + '/index.html');
});

// CREATE
app.post('/quotes', (req, res) => {
    console.log('lol');
});

app.listen(port, function() {
    console.log(`listening on port ${port}.`);
});