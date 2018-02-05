const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

// extract data from <form> into the body property in the req object
app.use(bodyParser.urlencoded({extended: true}));

// READ (path, callback)
app.get('/', (req, res) => {
    console.log('Get it!');
    res.sendFile(__dirname + '/index.html');
});

// CREATE
app.post('/quotes', (req, res) => {
    console.log(req.body);
});

app.listen(port, function() {
    console.log(`listening on port ${port}.`);
});