const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');

const port = 3000;
const app = express();
const dburl = 'dburl-goes-here';


// extract data from <form> into the body property in the req object
app.use(bodyParser.urlencoded({extended: true}));

// connect to server
MongoClient.connect(dburl, (error, client) => {
    let db;
    // start the server
    if(error) return console.log(error)
    db = client.db('crud-quotes')

    app.listen(port, function() {
        console.log(`listening on port ${port}.`);
    });
});


// READ (path, callback)
app.get('/', (req, res) => {
    console.log('Get it!');
    res.sendFile(__dirname + '/index.html');
});

// CREATE
app.post('/quotes', (req, res) => {
    console.log(req.body);
});