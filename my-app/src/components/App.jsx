import React, { useState } from "react";
import Heading from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNote] = useState([]);

  function addPost(post) {
    setNote((prevPost) => {
      return [...prevPost, post];
    });
  }

  function deletePost(id) {
    setNote((prevPost) => {
      return prevPost.filter((post, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Heading />
      <CreateArea onAdd={addPost} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deletePost}
        />
      ))}
      <Footer />
      <Footer />
    </div>
  );
}
