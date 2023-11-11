import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <div>
      <Link>About</Link>
      <Link>Home</Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
