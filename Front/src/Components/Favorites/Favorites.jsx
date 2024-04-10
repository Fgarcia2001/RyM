import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Filter from "../Filter/Filter";
import style from "./Favorites.module.css";
import { getFavorites, setValidateGetFav } from "../../redux/actions";
const Favorites = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const validate = useSelector((state) => state.getFavOnly1);
  const favorites = useSelector((state) => state.myFavorites);
  if (!favorites) return <div>Cargando</div>;
  useEffect(() => {
    if (!token) return;
    if (!validate) {
      dispatch(getFavorites(token));
      dispatch(setValidateGetFav(true));
    }
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Filter></Filter>
      <div className={style.favContainer}>
        {favorites.length === 0 && <div>Agrega personajes favoritos</div>}
        <AnimatePresence>
          {favorites.map(
            ({ id, name, species, gender, status, origin, image }) => (
              <Card
                key={id}
                id={id}
                name={name}
                species={species}
                status={status}
                origin={origin}
                gender={gender}
                image={image}
                char={false}
              />
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Favorites;
