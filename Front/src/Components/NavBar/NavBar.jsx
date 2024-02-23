import React from "react";
import style from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { postFav, setValidate, setValidateGetFav } from "../../redux/actions";

const NavBar = () => {
  const token = localStorage.getItem("token");
  const favorites = useSelector((state) => state.myFavorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favId = favorites.map((fav) => fav.id);
  const guardar = () => {
    dispatch(postFav({ favId }, token));
  };
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setValidate());
    dispatch(setValidateGetFav(false));
    navigate("/");
  };
  return (
    <div className={style.navContainer}>
      <div className={style.links}>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <SearchBar />
      <div>
        <button onClick={guardar}>Guardar cambios</button>
        <button onClick={logout}>Cerrar sesion</button>
      </div>
    </div>
  );
};

export default NavBar;
