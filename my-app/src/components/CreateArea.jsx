import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  function submitChange(event) {
    props.onAdd(post);
    setPost({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={post.tile}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={post.content}
        />
        <Zoom in={true}>
          <Fab onClick={submitChange}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
