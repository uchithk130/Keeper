import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css"

function App() {
  const [notes, setNotes] = useState([]);

  function addnote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deletenote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addnote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          index={index}
          title={noteItem.title}
          content={noteItem.content}
          ondelete={deletenote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
