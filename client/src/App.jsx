import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NewBook from "./components/NewBook";
import SingleBook from "./components/SingleBook";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = "http://localhost:8080/books";
    const axiosRes = await axios.get(API);
    setBooks(axiosRes.data);
  }

  async function handleDeleteButton(id) {
    const check = confirm("Are you sure?");
    if (check) {
      const API = `http://localhost:8080/books/${id}`;
      const axiosRes = await axios.delete(API);
      getBook();
    }
  }

  return (
    <>
      {books.map(({ _id, name, author, genre, yearPublished, blurb }) => {
        return (
          <SingleBook
            key={_id}
            _id={_id}
            name={name}
            author={author}
            genre={genre}
            yearPublished={yearPublished}
            blurb={blurb}
            handleDeleteButton={handleDeleteButton}
          />
        );
      })}

      <NewBook books={books} setBooks={setBooks}></NewBook>
    </>
  );
}

export default App;
