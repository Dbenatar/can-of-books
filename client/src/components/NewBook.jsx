import axios from "axios";
import React, { useState } from "react";

export default function NewBook({ books, setBooks }) {
  const [formData, setFormData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const API = "http://localhost:8080/books";
    const axiosRes = await axios.post(API, formData);
    setBooks([...books, axiosRes.data]);
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
        required
      />
      <input
        onChange={handleChange}
        name="author"
        type="text"
        placeholder="Author"
        required
      />
      <input
        onChange={handleChange}
        name="genre"
        type="text"
        placeholder="Genre"
        required
      />
      <input
        onChange={handleChange}
        name="yearPublished"
        type="number"
        placeholder="Year"
        required
      />
      <input
        onChange={handleChange}
        name="blurb"
        type="text"
        placeholder="Blurb"
        required
      />
      <input type="submit" value="Create New Book!" />
    </form>
  );
}
