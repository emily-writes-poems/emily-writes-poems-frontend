const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PoemCollection = new Schema(
    {
       collection_id : {
           type: String
       },
       collection_name: {
           type: String
       },
       poem_ids : [{
           type: String
       }],
       poem_titles: [{
           type: String
       }]
   },
   { collection: 'poem-collections-list'}
);

module.exports = mongoose.model('PoemCollection', PoemCollection);
