import React, { useEffect } from "react";
import style from "./SearchBar.module.css";
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
  const [vacio, setVacio] = useState(false);
  const handleChange = (event) => {
    if (event.target.value != "") {
      setState(event.target.value.trim());
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id === "") {
      setVacio(true);
      setTimeout(() => {
        setVacio(false);
      }, 3000);
      return;
    }
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

    document.getElementById("search").value = "";
    setState("");
  };
  useEffect(() => {}, [characters]);
  return (
    <div className={style.formId}>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="number" onChange={handleChange} id="search" />
          <input type="submit" />
          {vacio && <p className={style.p}>Ingrese un numero</p>}
        </div>
        {find ? (
          <div className={style.mensajeAlerta}>
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
