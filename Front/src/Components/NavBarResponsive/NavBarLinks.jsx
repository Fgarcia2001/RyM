import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./NavBarLinks.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenu } from "../../redux/actions";
import Logout from "../Logout/Logout";
const NavBarLinks = ({ setSave }) => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(setMenu());
  };

  const containerVariants = {
    hidden: { y: -1000, opacity: 1 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className={style.containerLinks}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit="hidden"
    >
      <Link className={style.links} onClick={click} to="/home">
        Home
      </Link>
      <Link className={style.links} onClick={click} to="/favorites">
        Favoritos
      </Link>
      <Link className={style.links} onClick={click} to="/about">
        Sobre mi
      </Link>

      <Logout setSave={setSave}></Logout>
    </motion.div>
  );
};

export default NavBarLinks;
