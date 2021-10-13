import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <h1 className="logo">MovieDB</h1>
      {/* <input className="search_bar" placeholder='Search for a movie'></input> */}
    </div>
  );
};

export default Navbar;
