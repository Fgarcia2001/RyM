import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCharacter, favoritesHandler } from "../../redux/actions";
const Card = ({ id, name, image, char, gender, origin, status, species }) => {
  const character = { id, name, image, char, gender, origin, status, species };
  const favoritos = useSelector((state) => state.myFavorites);
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
  }, []);
  return (
    <div className={style.CartaCharacter}>
      <div className={style.nameButton}>
        <h2>{name}</h2>
        {char && <button onClick={close}>X</button>}
        {<button onClick={handleFav}>{!fav ? "🤍" : "❤"}</button>}
      </div>
      <img src={image} alt="character" className={style.imagenChar} />
      <Link to={`/detail/${id}`}>
        <p>Ver detalle</p>
      </Link>
    </div>
  );
};

export default Card;
