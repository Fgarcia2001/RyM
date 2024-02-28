import React from "react";
import style from "./CloseSave.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postFav, setValidate, setValidateGetFav } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
const CloseSave = ({ setSave }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const favoritos = useSelector((state) => state.myFavoritesCopy);
  const favId = favoritos.map((fav) => fav.id);
  const saveClose = async () => {
    setSave(false);
    localStorage.removeItem("token");
    const post = await dispatch(postFav({ favId }, token));
    if (post) {
      dispatch(setValidate());
      dispatch(setValidateGetFav(false));
      navigate("/");
    } else {
      alert("No se pudo guardar los cambios");
    }
  };
  return (
    <div className={style.cartelContainer}>
      <div className={style.cartel}>
        <p>Desea guardar los cambios y cerrar sesion?</p>
        <div className={style.botones}>
          <button onClick={saveClose}>SI</button>
          <button onClick={() => setSave(false)}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default CloseSave;
