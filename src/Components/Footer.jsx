import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <h3> Copyright &copy; {year}</h3>
      </footer>
    </>
  );
};
export default Footer;
