require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const poemRoutes = express.Router();

let Poem = require('./poem.model');
let PoemCollection = require('./poem-collection.model');
let Feature = require('./feature.model');

app.use(cors());
app.use(bodyParser.json());

let PORT = process.env.PORT || 5000;
let DB_URI = process.env.CONNECTION_URI;
let NODE_ENV = app.get('env');

console.log(NODE_ENV);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('>> INFO: Successfully established MongoDB connection!'))
.catch(err => console.error('>> ERROR: Could not connect to MongoDB!'))


// Get all poems
poemRoutes.route('/').get(function(req, res) {
    console.log('>> DEBUG: Fetching all poems')
    Poem.find({}, {"poem_id":1, "poem_title":1, _id:0}, function(err, poems) {
       if (err) { console.log('?? Unexpected error occurred.'); return res.send(err); }
       else { return res.json(poems); }
    })
    .sort({ poem_title : 1}) // sort by ascending alphabetical
    .collation({ locale: 'en'}); // case-insensitive collation
});


// Search for poem by ID
poemRoutes.route('/poem/:poem_id').get(function(req, res) {
    console.log('>> DEBUG: Querying for poem: ' + req.params.poem_id);
    Poem.findOne({ poem_id: req.params.poem_id}, '-_id', function(err, poem) {
        if (err) { console.log('?? Unexpected error occurred.'); return res.send(err); }
        else if (!poem) { console.log('>> ERROR: Poem not found'); return res.json({}); }
        else { return res.json(poem); }
    });
});


// Search for collections a given poem is in
poemRoutes.route('/collections_by_poem/:poem_id').get(function(req, res) {
    console.log('>> DEBUG: Querying for poem collection(s) for poem: ' + req.params.poem_id);
    PoemCollection.find({ poem_ids : { $in: [req.params.poem_id] } }, {"collection_id":1, "collection_name":1, _id:0}, function(err, colls) {
        if (err) { console.log('?? Unexpected error occurred.'); return res.send(err); }
        else if (!colls.length) { console.log('>> DEBUG: No collections for this poem found'); return res.json({}); }
        else { return res.json(colls); }
    });
});


// Get all collections
poemRoutes.route('/collections/').get(function(req, res) {
    console.log('>> DEBUG: Fetching all collections')
    PoemCollection.find({}, {"collection_id":1, "collection_name":1, _id:0}, function(err, collections) {
       if (err) { console.log('?? Unexpected error occurred.'); return res.send(err); }
       else { return res.json(collections); }
    })
    .sort({ collection_name : 1}) // sort by ascending alphabetical
    .collation({ locale: 'en'}); // case-insensitive collation
});


// Search for collection by ID
poemRoutes.route('/collection/:collection_id').get(function(req, res) {
    console.log('>> DEBUG: Querying for poem collection by ID: ' + req.params.collection_id);
    PoemCollection.findOne({ collection_id : req.params.collection_id }, '-_id', function(err, coll) {
        if (err) { console.log('?? Unexpected error occurred.'); return res.send(err); }
        else if (!coll) { console.log('>> ERROR: poem collection not found'); return res.json({}); }
        else { return res.json(coll); }
    });
});


// Get the current feature
poemRoutes.route('/feature/').get(function(req, res) {
    console.log('>> DEBUG: Querying for current feature');
    Feature.findOne( { currently_featured : true }, '-_id -currently_featured', function(err, feat) {
       if(err) { return res.send(err); }
       else if (!feat) { console.log('>> DEBUG: No current feature'); return res.json({}); }
       else { return res.json(feat); }
    });
});


app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/poems', poemRoutes)

app.get("*", (req, res) => {
    if (NODE_ENV=='development') {
        res.sendFile(path.join(__dirname, "client", "public", "index.html"))
    } else {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    }
});


app.listen(PORT, function() {
    console.log('>> INFO: Server is running on port ' + PORT);
});
