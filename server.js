const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const port = 3000;
const app = express();
// const dburl = 'dburl-goes-here';

let db;

// template engine, setting express to ejs
app.set('view engine', 'ejs');
// extract data from <form> into the body property in the req object
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// server does not read json, so this is where body-parser come in
app.use(bodyParser.json());

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
// app.get('/', (req, res) => {
//     // console.log('Get it!');
//     res.sendFile(__dirname + '/index.html');
// });

// CREATE
app.post('/quotes', (req, res) => {
    db.collection('crud-quotes').save(req.body, (error, result) => {
        if(error) return console.log(error);
        console.log('saved to the database');
        res.redirect('/');
    });
});

// GET (find quotes, get cursor(mongo object) in return)
app.get('/', (req, res) =>  {
    db.collection('crud-quotes').find().toArray(function(err, results) {
        console.log(results)
        // rendering ejs (file we are rendering, object that passes data into view)
        res.render('index.ejs', {quotes: results});
      })
})

// PUT
app.put('/quotes', (req, res) => {
    db.collection('crud-quotes').findOneAndUpdate({
        name: 'bob'
    }, {
        $set: {
            name: req.body.name,
            quote: req.body.quote
        }
    }, {
        sort: {_id: -1},
        upsert: true
    }, (error, result) => {
        if(error) return res.send(error)
        res.send(result)
    })
})

        // query, // to filter the collection through key-value pairs
        // update, // the cmd to tell mongo what to do with the req
        // options, // define additonal params
        // callback // once teh req come in, what to do next