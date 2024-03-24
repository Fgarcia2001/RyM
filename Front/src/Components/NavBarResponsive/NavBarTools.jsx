import React from "react";
import style from "./NavbarTools.module.css";
import { setMenu } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const NavBarResponsive = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.openMenu);
  const menu = () => {
    dispatch(setMenu());
  };

  return (
    <div onClick={menu} className={style.navbar}>
      <motion.div
        className={style.line}
        animate={{
          rotate: open ? 40 : 0,

          transition: { duration: 0.3 },
        }}
      ></motion.div>
      <motion.div
        className={style.line}
        animate={{
          rotate: open ? -40 : 0,

          transition: { duration: 0.3 },
        }}
      ></motion.div>
    </div>
  );
};

export default NavBarResponsive;
