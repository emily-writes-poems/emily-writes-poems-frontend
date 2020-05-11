const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Poem = new Schema(
    {
       poem_title: {
           type: String
       },
       poem_date: {
           type: String
       },
       poem_text: [{
           type: String
       }],
       poem_wordcount: {
           type: Number
       },
       poem_linecount: {
           type: Number
       }
   },
   { collection: 'poems-list'}
);

module.exports = mongoose.model('Poem', Poem);
