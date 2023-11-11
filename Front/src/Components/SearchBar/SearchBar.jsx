import React from "react";
import { useState } from "react";
import { getCharacterId } from "../../redux/actions";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [id, setState] = useState("");

  const handleChange = (event) => {
    if (event.target.value != "") {
      setState(event.target.value.trim());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCharacterId(id));
    document.getElementById("search").value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange} id="search" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
