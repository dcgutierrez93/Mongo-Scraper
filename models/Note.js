// =============================================================================

// Note Model

// =============================================================================
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    // The headline is the article associate with the note
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref : "Headline"
    },
    // date is just a string
    date: String,
    // as is the noteText
    noteText: String
});

// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
