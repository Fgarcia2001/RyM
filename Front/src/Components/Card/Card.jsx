import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { deleteCharacter, favoritesHandler } from "../../redux/actions";
const Card = ({ id, name, image, char, gender, origin, status, species }) => {
  const character = { id, name, image, char, gender, origin, status, species };
  const favoritos = useSelector((state) => state.myFavoritesCopy);
  const [fav, setFav] = useState(false);

  const dispatch = useDispatch();
  const close = () => {
    dispatch(deleteCharacter(id));
  };
  const handleFav = () => {
    dispatch(favoritesHandler(fav, character));
    setFav(!fav);
  };
  useEffect(() => {
    setFav(favoritos.some((fav) => fav.id === id));
  }, [closed]);
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0.5, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,

        ease: [0, 0.6, 0.1, 1.1],
      }}
      exit={{ opacity: 0 }}
      className={style.CartaCharacter}
    >
      <p>{id}</p>
      {char && (
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={close}
        ></button>
      )}
      <div className={style.nameButton}>
        <h2>{name}</h2>
        {<button onClick={handleFav}>{!fav ? "🤍" : "❤"}</button>}
      </div>
      <img src={image} alt="character" className={style.imagenChar} />
      <Link to={`/detail/${id}`}>
        <p>Ver detalle</p>
      </Link>
    </motion.div>
  );
};

export default Card;
