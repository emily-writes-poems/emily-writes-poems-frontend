require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const poemRoutes = express.Router();

let Poem = require('./poem.model');
app.use(cors());
app.use(bodyParser.json());

let PORT = process.env.PORT;
let DB_URI = process.env.CONNECTION_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('>> Successfully established MongoDB connection!'))
.catch(err => console.error('>> Could not connect to MongoDB!'))


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
        else if (poem === null) { return res.status(404).send({ message : 'poem not found'}); }
        else { res.json(poem); }
    });
});

app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/poems', poemRoutes)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
    console.log('>> Server is running on port ' + PORT);
});
