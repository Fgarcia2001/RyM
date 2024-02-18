import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { postFav } from "../../redux/actions";
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
    navigate("/");
  };
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar />
      <button onClick={guardar}>Guardar cambios</button>
      <button onClick={logout}>Cerrar sesion</button>
    </div>
  );
};

export default NavBar;
