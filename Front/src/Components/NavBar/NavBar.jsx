import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
