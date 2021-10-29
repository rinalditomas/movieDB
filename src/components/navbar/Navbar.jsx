import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [input, setInput] = useState("");
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };
  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <Link to="/">
        <img
          className="logo"
          src="https://camo.githubusercontent.com/3473ad272177937efdaea24da61c7a9204540ef4a3eccace1fed89403805191c/68747470733a2f2f7777772e7468656d6f76696564622e6f72672f6173736574732f322f76342f6c6f676f732f343038783136312d706f77657265642d62792d72656374616e676c652d677265656e2d626234333031633130646463373439623465373934363338313161363861666562656165363665663433643137626366643866663065363064656437636539392e706e67"
          alt=""
        />
      </Link>
      <form className="search_container" onSubmit={search}>
        <input
          className="search_bar"
          placeholder="Search for a movie"
          onChange={handleChange}
        ></input>
        <button type="submit" className="search">
          <ion-icon id="glass" name="search-outline"></ion-icon>
        </button>
      </form>
    </div>
  );
};

export default Navbar;
