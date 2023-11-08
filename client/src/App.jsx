import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NewBook from "./components/NewBook";

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
          <div key={_id}>
            <h1>{name}</h1>
            <h2>{author}</h2>
            <h3>
              {genre}, {yearPublished}
            </h3>
            <p>{blurb}</p>
            <button
              onClick={() => {
                handleDeleteButton(_id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}

      <NewBook books={books} setBooks={setBooks}></NewBook>
    </>
  );
}

export default App;
