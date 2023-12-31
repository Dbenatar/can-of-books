const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/book");

const app = express();
app.use(cors());
app.use(express.json()); //middlleware that parses body

const PORT = 8080;
mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/books", async (req, res) => {
  const books = await Book.find(req.query);

  res.json(books);
});

app.post("/books", async (req, res) => {
  const newBook = await Book.create(req.body); //this add stuff to the db
  res.json(newBook);
});

app.delete("/books/:id", async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);
  res.json(deletedBook);
});

app.put("/books/:id", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedBook);
});

app.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`);
});
