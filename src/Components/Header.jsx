import React from "react";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
const Header = () => {
  return (
    <>
      <header className="header">
        <AssignmentTurnedInIcon className="custom" />
        <h1> Keeper Looker</h1>
      </header>
    </>
  );
};

export default Header;
