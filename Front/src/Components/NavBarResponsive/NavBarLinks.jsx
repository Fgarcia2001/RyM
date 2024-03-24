import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./NavBarLinks.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenu } from "../../redux/actions";

const NavBarLinks = () => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(setMenu());
  };

  // Variante para la animación
  const containerVariants = {
    hidden: { y: -1000, opacity: 1 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={style.containerLinks}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0 }}
    >
      <Link onClick={click} to="/home">
        Home
      </Link>
      <Link onClick={click} to="/favorites">
        Favoritos
      </Link>
      <Link onClick={click} to="/about">
        Sobre mi
      </Link>
    </motion.div>
  );
};

export default NavBarLinks;
