const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.MONGO_URL);

async function seed() {
  await Book.create([
    {
      name: "Test Book FA",
      author: "Test Author FA",
      genre: "Test Genre FA",
      yearPublished: 1991,
      blurb: "Test Blurb FA",
    },
  ]);

  console.log("Book created");
  mongoose.disconnect();
}

seed();
