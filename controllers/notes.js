// =============================================================================

// Controller for our notes

// =============================================================================
var Note     = require("../models/Note");
var makeDate = require("../scripts/date");

module.exports = {

  get: function(data, cb) {
    Note.find({
      _headlineId: data._id
    }, cb);
  },
  // Save a note
  save: function(data, cb) {

    // Make a newNote with the note model, saving the apropos info
    var newNote = {
      _headlineId: data._id,
      date       : makeDate(),
      noteText   : data.noteText
    };

    // Save the newNote we made to mongoDB with mongoose's save function
    Note.create(newNote, function(err, doc) {
      if (err) {
        console.log(err);
      }
      // Or just log the doc we saved
      else {
        console.log(doc);
        cb(doc);
      }
    });
  },
  delete: function(data, cb) {
    Note.remove({
      _id: data._id
    }, cb);
  }
};
