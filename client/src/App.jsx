import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
          </div>
        );
      })}
    </>
  );
}

export default App;
