import React from "react";
import Heading from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../note";

export default function App() {
  return (
    <div>
      <Heading />
      {notes.map((element) => (
        <Note
          key={element.key}
          title={element.title}
          content={element.content}
        />
      ))}
      <Footer />
    </div>
  );
}
