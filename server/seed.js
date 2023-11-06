const mongoose = require("mongoose");

require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.MONGO_URL);

async function seed() {
  await Book.create([
    {
      name: "Test Book GJ",
      author: "Test Author GJ",
      genre: "Test Genre GJ",
      yearPublished: 2000,
      blurb: "Lorem blurb GJ",
    },
  ]);

  console.log("Book Created");
  mongoose.disconnect();
}

seed();
