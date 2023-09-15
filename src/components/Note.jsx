import React from "react";

function Note(props) {
  function handlehange() {
    props.ondelete(props.index);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handlehange}>DELETE</button>
    </div>
  );
}

export default Note;
