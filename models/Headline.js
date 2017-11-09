// =============================================================================

// Headline Model

// =============================================================================
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var headlineSchema = new Schema({
    // headline, a string must be entered
    headline: {
        type    : String,
        required: true,
        unique  : true
    },
    // summary, a string must be entered
    summary: {
        type    : String,
        required: true
    },
    // date is just a String
    date : String,
    saved: {
        type   : Boolean,
        default: false
    }
});

// Creates the headline model using Schema.
var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
