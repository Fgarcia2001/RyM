import React from "react";
import style from "./DetailLoading.module.css";
const DetailLoading = () => {
  return (
    <div className={style.divLoading}>
      <div className={style.imagen}></div>
      <div className={style.filas}>
        <div className={style.fila}></div>
        <div className={style.fila}></div>
        <div className={style.fila}></div>
      </div>
    </div>
  );
};

export default DetailLoading;
