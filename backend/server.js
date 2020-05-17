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
    console.log('>> Established connection to MongoDB database!')
});


// Get all poems
poemRoutes.route('/').get(function(req, res) {
    console.log('>> Fetching all poems')
    Poem.find(function(err, poems) {
       if(err) { console.log(err); }
       else { res.json(poems); }
    })
    .sort({ poem_title : 1}) // sort by ascending alphabetical
    .collation({ locale: 'en'}); // case-insensitive collation
});


// Search for poem by ID
poemRoutes.route('/:poem_id').get(function(req, res) {
    console.log('>> Querying for poem: ' + req.params.poem_id);
    Poem.findOne({ poem_id: req.params.poem_id}, function(err, poem) {
        if(err) { return res.send(err); }
        else { res.json(poem); }
    });
});


app.use('/poems', poemRoutes)

app.listen(PORT, function() {
    console.log('>> Server is running on port ' + PORT);
});
