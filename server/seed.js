const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

async function seed() {
  await Book.create([
    {
      name: "Test Book",
      author: "Test 2",
      genre: "test genre",
      yearPublished: 2000,
      blurb: "Lorem blurb",
    },
    {
      name: "Test Book",
      author: "Test 3",
      genre: "test genre",
      yearPublished: 2000,
      blurb: "Lorem blurb",
    },
    {
      name: "Test Book",
      author: "Test 4",
      genre: "test genre",
      yearPublished: 2000,
      blurb: "Lorem blurb",
    },
    {
      name: "Test Book",
      author: "Test 5",
      genre: "test genre",
      yearPublished: 2000,
      blurb: "Lorem blurb",
    },
  ]);

  console.log("Book created");
  mongoose.disconnect();
}

seed();
