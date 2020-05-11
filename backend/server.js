const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3456;
const poemRoutes = express.Router();

let Poem = require('./poem.model');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/poems',{ useNewURLParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log(">> Established connection to MongoDB database! <<")
});


// Get all poems
poemRoutes.route('/').get(function(req, res) {
    Poem.find(function(err, poems) {
       if(err) { console.log(err); }
       else { res.json(poems); }
    });
});


// Search for poem by title
poemRoutes.route('/:title').get(function(req, res) {
    console.log('Querying for: ' + req.params.title);
    Poem.findOne({ poem_title: req.params.title}, function(err, poem) {
        if(err) { return res.send(err); }
        else { res.json(poem); }
    });
});


app.use('/poems', poemRoutes)

app.listen(PORT, function() {
    console.log(">> Server is running on port " + PORT + " <<");
});
