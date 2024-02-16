import React, { useEffect } from "react";
import { useState } from "react";
import { getCharacterId } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) =>
    state.characters === undefined ? [] : state.characters
  );
  const [id, setState] = useState("");
  const [find, setFind] = useState(false);
  const [noexist, setNoexist] = useState(false);
  const handleChange = (event) => {
    if (event.target.value != "") {
      setState(event.target.value.trim());
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const encontrado = characters.some((char) => char.id == id);
    if (!encontrado) {
      const response = await dispatch(getCharacterId(id));
      if (response === "No existe") {
        setNoexist(true);
        setTimeout(() => {
          setNoexist(false);
        }, 1500);
      }
    } else {
      setFind(true);
      setTimeout(() => {
        setFind(false);
      }, 1500);
    }
    //const response = await dispatch(getCharacterId(id));
    document.getElementById("search").value = "";
  };
  useEffect(() => {}, [characters]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange} id="search" />
        <input type="submit" />
        {find ? (
          <div>
            <p>Repetido</p>
          </div>
        ) : null}
        {noexist ? (
          <div>
            <p>No existe el personaje</p>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default SearchBar;
