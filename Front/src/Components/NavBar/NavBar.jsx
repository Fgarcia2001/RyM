import React, { useState } from "react";
import style from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import NavBarTools from "../NavBarResponsive/NavBarTools";
import Logout from "../Logout/Logout";
import { useDispatch, useSelector } from "react-redux";
import { postFav, setValidate, setValidateGetFav } from "../../redux/actions";
import save from "../../assets/floppy.svg";

const NavBar = ({ setSave, setPost }) => {
  const token = localStorage.getItem("token");
  const favorites = useSelector((state) => state.myFavoritesCopy);
  const favfirst = useSelector((state) => state.favoritesFirst);
  const open = useSelector((state) => state.openMenu);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favIdFirst = favfirst.map((fav) => fav.id);
  const favId = favorites.map((fav) => fav.id);
  const guardar = async () => {
    const trueOrFalse = verificar(favId, favIdFirst);
    if (!trueOrFalse) {
      setPost(true);
      const post = await dispatch(postFav({ favId }, token));
      if (!post) {
        alert("Error al guardar los favoritos");
        setPost(false);
        return;
      }
      setPost(false);
    } else {
      alert("No se modifico los favoritos");
    }
  };
  const logout = () => {
    const close = verificar(favIdFirst, favId);
    if (!close) {
      setSave(true);
    } else {
      localStorage.removeItem("token");
      dispatch(setValidate());
      dispatch(setValidateGetFav(false));
      navigate("/");
    }
  };

  const verificar = (arr1, arr2) => {
    if ((Array.isArray(arr1) && Array.isArray(arr2)) === false) return false;
    return (
      JSON.stringify([...new Set(arr1.flat().sort())]) ===
      JSON.stringify([...new Set(arr2.flat().sort())])
    );
  };

  return (
    <div className={style.navContainer}>
      <NavBarTools setSave={setSave}></NavBarTools>
      <div className={style.links}>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      {!open && <SearchBar />}
      {!open && (
        <div className={style.divBotones}>
          <div className={style.btnSave} onClick={guardar}>
            <img src={save} alt="guardar" />
          </div>

          {/* <button onClick={logout} className={style.btnLogout}>
            Cerrar sesion
          </button> */}
          <div className={style.divLogout}>
            <Logout className={style.logout} setSave={setSave}></Logout>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
