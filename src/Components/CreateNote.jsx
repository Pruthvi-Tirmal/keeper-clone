import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
const CreateNote = ({ passNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
    // console.log(note);
  };
  const addEvent = () => {
    passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <main className="write_container">
        <form action="">
          <input
            type="text"
            name="title"
            id=""
            placeholder="Title"
            autoComplete="off"
            maxLength="20"
            onChange={inputEvent}
            value={note.title}
            required
          />
          <textarea
            onChange={inputEvent}
            value={note.content}
            name="content"
            placeholder="write your tasks"
            id=""
            cols=""
            rows="1"
          ></textarea>
        </form>
        <Button className="btn" onClick={addEvent}>
          <AddIcon className="plus" />
        </Button>
      </main>
    </>
  );
};

export default CreateNote;
