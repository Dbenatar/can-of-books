import React, { useState } from "react";

export default function SingleBook({
  _id,
  name,
  author,
  genre,
  yearPublished,
  blurb,
  handleDeleteButton,
}) {
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable(!isEditable);
  }

  function handleChange(e) {
    console.log(e.currentTarget.textContent);
  }

  return (
    <div key={_id}>
      <h1
        contentEditable={isEditable}
        onInput={(e) => {
          handleChange(e);
        }}
      >
        {name}
      </h1>
      <h2 contentEditable={isEditable}>{author}</h2>
      <h3 contentEditable={isEditable}>
        {genre}, {yearPublished}
      </h3>
      <p contentEditable={isEditable}>{blurb}</p>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button
          onClick={() => {
            handleDeleteButton(_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
