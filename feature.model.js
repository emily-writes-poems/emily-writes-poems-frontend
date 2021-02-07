const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Feature = new Schema(
    {
        poem_id : {
            type: String
        },
        poem_title : {
            type: String
        },
        featured_text : {
            type: String
        }
    },
    { collection: 'featured' }
);

module.exports = mongoose.model('Feature', Feature);
