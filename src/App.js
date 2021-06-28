import React from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import { useState } from "react";
const App = () => {
  const [addItem, setItem] = useState([]);
  const addNote = (note) => {
    if (note.title !== "" || note.content !== "") {
      setItem((preValue) => {
        return [...preValue, note];
      });
    }
  };
  const onDelete = (id) => {
    setItem((odd) =>    //don't put the curly bracket
      odd.filter((arr, index) => {
        return index !== id;
      })
    )
  };


  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="alignment">
        {addItem.map((val, ind) => {
          return (
            <Note key={ind} id={ind} title={val.title} content={val.content} deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
