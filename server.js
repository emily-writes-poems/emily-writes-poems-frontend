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


mongoose.connect(DB_URI)
.then(() => console.log('>> INFO: Successfully established MongoDB connection!'))
.catch(err => console.error('>> ERROR: Could not connect to MongoDB!'))


// Get all poems
poemRoutes.route('/').get(async function(req, res) {
    console.log('>> DEBUG: Fetching all poems')
    await Poem.find({}, {"poem_id":1, "poem_title":1, _id:0})
    .sort({ poem_title : 1}) // sort by ascending alphabetical
    .collation({ locale: 'en'}) // case-insensitive collation
    .exec()
    .then((poems) => {
        return res.json(poems);
    })
    .catch((err) => {
        console.log('?? Unexpected error occurred while getting all poems: ' + err); return res.send(err);
    });
});


// Search for poem by ID
poemRoutes.route('/poem/:poem_id').get(async function(req, res) {
    console.log('>> DEBUG: Querying for poem: ' + req.params.poem_id);
    await Poem.findOne({ poem_id: req.params.poem_id }, '-_id')
    .exec()
    .then((poem) => {
        if (!poem) { console.log('>> ERROR: Poem not found: ' + req.params.poem_id); return res.json({}); }
        else { return res.json(poem); }
    })
    .catch((err) => {
        console.log('?? Unexpected error occurred while searching for poem by ID: ' + err); return res.send(err);
    });
});


// Search for collections a given poem is in
poemRoutes.route('/collections_by_poem/:poem_id').get(async function(req, res) {
    console.log('>> DEBUG: Querying for poem collection(s) for poem: ' + req.params.poem_id);
    await PoemCollection.find({ poem_ids : { $in: [req.params.poem_id] } }, {"collection_id":1, "collection_name":1, _id:0})
    .exec()
    .then((colls) => {
        if(!colls.length) { console.log('>> DEBUG: No collections for this poem found: ' + req.params.poem_id); return res.json({}); }
        else { return res.json(colls); }
    })
    .catch((err) => {
        console.log('?? Unexpected error occurred while searching for collections this poem is in: ' + err); return res.send(err);
    });
});


// Get all collections
poemRoutes.route('/collections/').get(async function(req, res) {
    console.log('>> DEBUG: Fetching all collections')
    PoemCollection.find({}, {"collection_id":1, "collection_name":1, _id:0})
    .sort({ collection_name : 1}) // sort by ascending alphabetical
    .collation({ locale: 'en'}) // case-insensitive collation
    .exec()
    .then((collections) => {
        return res.json(collections);
    })
    .catch((err) => {
        console.log('?? Unexpected error occurred while getting all collections: ' + err); return res.send(err);
    });
});


// Search for collection by ID
poemRoutes.route('/collection/:collection_id').get(async function(req, res) {
    console.log('>> DEBUG: Querying for poem collection by ID: ' + req.params.collection_id);
    await PoemCollection.findOne({ collection_id : req.params.collection_id }, '-_id')
    .exec()
    .then((coll) => {
        if (!coll) { console.log('>> ERROR: poem collection not found'); return res.json({}); }
        else { return res.json(coll); }
    })
    .catch((err) => {
        console.log('?? Unexpected error occurred while searching for collection by ID: ' + err); return res.send(err);
    });
});


// Get the current feature
poemRoutes.route('/feature/').get(async function(req, res) {
    console.log('>> DEBUG: Querying for current feature');
    await Feature.findOne( { currently_featured : true }, '-_id -currently_featured')
    .exec()
    .then((feat) => {
       if (!feat) { console.log('>> DEBUG: No current feature'); return res.json({}); }
       else { return res.json(feat); }
    })
    .catch((err) => {
        console.log('?? Unexpected error occurred while getting current feature: ' + err); return res.send(err);

    })
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
