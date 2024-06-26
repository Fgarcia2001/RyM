import React, { useEffect, useState } from "react";
import style from "./Landing.module.css";

import logo from "../../assets/Rick_and_Morty_logo.webp";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Landing = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [creado, setCreado] = useState(false);
  const valid = useSelector((state) => state.validate);
  const navigate = useNavigate();
  const animacion = {
    scale: [1, 0.8, 1],
    rotate: [0, 5, -5, 0],

    transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
  };
  useEffect(() => {
    if (valid) {
      navigate("/home");
      alert("Cierre sesion por favor");
    }
  }, []);
  return (
    <div className={style.landing}>
      <AnimatePresence>
        {creado && (
          <motion.div
            className={style.divGif}
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className={style.containerForm}>
        <div className={style.logo}>
          <motion.img animate={animacion} src={logo} alt="logo" />
        </div>
        {!isSignUp ? (
          <Login state={setIsSignUp} />
        ) : (
          <Signup state={setIsSignUp} creado={setCreado} />
        )}
      </div>
    </div>
  );
};

export default Landing;
