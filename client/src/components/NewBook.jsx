import axios from "axios";
import React from "react";

export default function NewBook() {

  async function handleClick() {
    const API = "http://localhost:8080/books";
    
    const axiosRes = await axios.post(API, {
      name: "Test Book New 1602",
      author: "Test author",
      genre: "test genre",
      yearPublished: 2000,
      blurb: "Lorem blurb",
    });
  }

  return <button onClick={handleClick}>NewBook</button>;
}
