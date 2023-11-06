const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  author: String,
  genre: String,
  yearPublished: Number,
  blurb: String,
});
//add image url
//change name to title

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
