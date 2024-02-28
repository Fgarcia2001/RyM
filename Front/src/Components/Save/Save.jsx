import React, { useEffect, useState } from "react";
import style from "./Save.module.css";
const Save = ({ setPost }) => {
  const [segundosRestantes, setSegundosRestantes] = useState(3);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundosRestantes((prevSegundos) => prevSegundos - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalo);
      setPost(false);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [setPost]);
  return (
    <div className={style.container}>
      <div className={style.cartel}>
        <p>CAMBIOS GUARDADOS</p>
        <p>({segundosRestantes})</p>
      </div>
    </div>
  );
};

export default Save;
