const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URL);

async function seed() {
  await Book.create([
    {
      name: "Test Book",
      author: "Test author",
      genre: "test genre",
      yearPublished: 2000,
      blurb: "Lorem blurb",
    },
  ]);

  console.log("Book created");
  mongoose.disconnect();
}

seed();
