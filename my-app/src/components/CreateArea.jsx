import React, {useState} from "react";

function CreateArea(props) {

  const[post, setPost] = useState({
    title: "",
    content:""
  })

  function handleChange(event){
    const{name, value} = event.target;
    setPost(prevVal => {
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form className="textarea">
        <input onChange={handleChange} name="title" placeholder="Title" value={post.tile}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={post.content}/>
        <button onClick={() =>{
          props.onAdd(post)
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
