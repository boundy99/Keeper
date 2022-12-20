import React from "react";
import Heading from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


export default function App() {
  return (
    <div>
      <Heading />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
      <Footer />
    </div>
  );
}
