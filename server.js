const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const port = 3000;
const app = express();
const dburl = 'dburl-goes-here';

let db;

// extract data from <form> into the body property in the req object
app.use(bodyParser.urlencoded({extended: true}));

// connect to server
MongoClient.connect(dburl, (error, client) => {

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
    db.collection('crud-quotes').save(req.body, (error, result) => {
        if(error) return console.log(error);
        console.log('saved to the database');
        res.redirect('/');
    });
});
