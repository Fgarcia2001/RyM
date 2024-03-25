import React from "react";
import style from "./Logout.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setValidate, setValidateGetFav, setMenu } from "../../redux/actions";
import cerrar from "../../assets/box-arrow-right.svg";
const Logout = ({ setSave }) => {
  const token = localStorage.getItem("token");
  const favorites = useSelector((state) => state.myFavoritesCopy);
  const favfirst = useSelector((state) => state.favoritesFirst);
  const open = useSelector((state) => state.openMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favIdFirst = favfirst.map((fav) => fav.id);
  const favId = favorites.map((fav) => fav.id);
  const logout = () => {
    const close = verificar(favIdFirst, favId);
    if (!close) {
      if (open) {
        dispatch(setMenu());
      }
      setSave(true);
    } else {
      localStorage.removeItem("token");
      dispatch(setMenu());
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
    <div className={style.logout} onClick={logout}>
      {open ? "Cerrar sesión" : <img src={cerrar} alt="logout"></img>}
    </div>
  );
};

export default Logout;
