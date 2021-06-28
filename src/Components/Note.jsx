import React from "react";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const Note = ({ title, content, id, deleteItem, Onchange }) => {
  const deleteNote = () => {
    deleteItem(id);
  };
  // let titleChange;
  // let contentChange;
  // let flag = true;
  const editNote = () => {
    Onchange(id);
  };
  return (
    <>
      <section className="note">
        <h3>{title}</h3>
        <br />
        <p>{content === "" ? " " : content}</p>
        <div className="container">
          <Button className="btn" onClick={deleteNote}>
            <DeleteOutlineIcon className="trash" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Note;
