import React from "react";
import style from "./Footer.module.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { animate, motion } from "framer-motion";
const info = {
  github: "https://github.com/Fgarcia2001",
  linkedin: "https://www.linkedin.com/in/francogarcia2001/",
  mensaje: "Hola Franco! Muy buena tu web de Rick and Morty",
  celular: "543415400051",
};
const mensaje = encodeURIComponent(info.mensaje);
const linkWsp = `https://wa.me/${info.celular}?text=${mensaje}`;
const Footer = () => {
  const temblar = {
    rotate: 360,
    transition: { duration: 0.3 },
  };

  return (
    <footer className={style.footer}>
      <div className={style.copy}>
        <p className={style.p}> Franco García ©2024</p>
      </div>
      <div className={style.iconos}>
        <a href={info.github} target="_blank">
          <motion.img
            className={style.a}
            src={github}
            alt="github"
            initial={{ rotate: 0 }}
            whileHover={temblar}
          />
        </a>
        <a href={info.linkedin} target="_blank">
          <motion.img
            initial={{ rotate: 0 }}
            whileHover={temblar}
            className={style.a}
            src={linkedin}
            alt="linkedin"
          />
        </a>
        <a href={linkWsp} target="_blank">
          <motion.img
            initial={{ rotate: 0 }}
            whileHover={temblar}
            className={style.a2}
            src={whatsapp}
            alt="wsp"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
