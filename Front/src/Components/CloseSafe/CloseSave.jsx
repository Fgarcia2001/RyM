import React, { useState } from "react";
import style from "./CloseSave.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postFav, setValidate, setValidateGetFav } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const CloseSave = ({ setSave }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const favoritos = useSelector((state) => state.myFavoritesCopy);
  const favId = favoritos.map((fav) => fav.id);
  const saveClose = async (event) => {
    localStorage.removeItem("token");
    if (event.target.name === "no") {
      setSave(false);
      dispatch(setValidate());
      dispatch(setValidateGetFav(false));
      navigate("/");
      return;
    }
    setLoading(true);
    const post = await dispatch(postFav({ favId }, token));
    setLoading(false);
    setSave(false);
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
        {!loading && (
          <p className={style.safeP}>
            Desea guardar los cambios antes de cerrar sesion?
          </p>
        )}
        {!loading ? (
          <div className={style.botones}>
            <button className={style.boton} name="no" onClick={saveClose}>
              NO
            </button>
            <button className={style.boton} onClick={saveClose}>
              SI
            </button>
          </div>
        ) : (
          <div className={style.safeAndClose}>
            <p>Guardando cambios</p>
            <div class="spinner-border" role="status"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CloseSave;
