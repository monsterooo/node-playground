var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Numberv,
      favs:  Number
    }
  });
});