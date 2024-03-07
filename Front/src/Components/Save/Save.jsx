import React, { useEffect, useState } from "react";
import style from "./Save.module.css";
import { motion } from "framer-motion";
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
      <motion.div
        className={style.cartel}
        initial={{ opacity: 0.2, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>CAMBIOS GUARDADOS</p>
        <p>({segundosRestantes})</p>
      </motion.div>
    </div>
  );
};

export default Save;
