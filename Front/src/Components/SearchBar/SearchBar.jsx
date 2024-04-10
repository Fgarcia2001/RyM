import React, { useEffect } from "react";
import style from "./SearchBar.module.css";
import { motion } from "framer-motion";
import alerta from "../../assets/exclamation-circle.svg";
import { useState } from "react";
import { getCharacterId } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import search from "../../assets/search.svg";
const SearchBar = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) =>
    state.characters === undefined ? [] : state.characters
  );
  const [id, setState] = useState("");
  const [find, setFind] = useState(false);
  const [noexist, setNoexist] = useState(false);
  const [vacio, setVacio] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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
      setLoading(true);
      const response = await dispatch(getCharacterId(id));
      setLoading(false);
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
  useEffect(() => {
    setIsAnimating(characters.length === 0);
  }, [characters]);
  return (
    <div className={style.formId}>
      <motion.form
        className={characters.length === 0 ? style.form : null}
        animate={{
          scale: characters.length === 0 ? [1, 1.1, 1] : 1,
          transition: characters.length === 0 && {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        onSubmit={handleSubmit}
      >
        <div className={style.searchbar}>
          <input
            className={style.inputSearch}
            type="number"
            placeholder=" 1-826"
            onChange={handleChange}
            id="search"
          />

          <div className={style.search}>
            {!loading ? (
              <button type="submit">
                <img src={search} alt="search" />
              </button>
            ) : (
              <div>
                <div class="spinner-border" role="status"></div>
              </div>
            )}
          </div>
        </div>
      </motion.form>
      {find ? (
        <div className={style.cartelAlerta}>
          <img src={alerta} alt="icono" />
          <p>Repetido</p>
        </div>
      ) : null}
      {noexist ? (
        <div className={style.cartelAlerta}>
          <img src={alerta} alt="icono" />
          <p>No existe el personaje</p>
        </div>
      ) : null}
      {vacio && (
        <div className={style.cartelAlerta}>
          <img src={alerta} alt="icono" />
          <p>Ingrese un número</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
