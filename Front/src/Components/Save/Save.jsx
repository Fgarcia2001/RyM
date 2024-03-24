import React, { useEffect, useState } from "react";
import style from "./Save.module.css";
import { motion } from "framer-motion";
const Save = () => {
  return (
    <div className={style.container}>
      <motion.div
        className={style.cartel}
        initial={{ opacity: 0.2, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.save}>
          <h3>Guardando cambios</h3>
          <div class="spinner-border" role="status"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Save;
