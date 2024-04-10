import React from "react";
import style from "./About.module.css";
import logo from "../../assets/Rick_and_Morty_logo.webp";
import developer from "../../assets/developer.jpeg";
const About = () => {
  return (
    <div className={style.about}>
      <div className={style.informacion}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.section}>
          <div className={style.appSection}>
            <h2 className={style.titles}>Aplicación</h2>
            <p>
              La aplicación web esta ambientada a la serie animada Rick and
              Morty. Una vez que se registró en la app usted podrá buscar hasta
              826 personajes de la serie y agregar los que mas te gusten a la
              sección de favoritos con solo clickear el corazón. En el menu
              puede ir a favoritos para visualizarlos a todos. No olvides
              guardar los cambios antes de cerrar sesión! <br /> Las tecnologias
              utilizadas para la creación: React, Redux, Javascript, Node,
              Express, Sequelize, postgreSQL, JWT, Bootstrap, Next UI, Framer
              Motion.
            </p>
          </div>
          <div className={style.creaSection}>
            <h2 className={style.titles}>Creador</h2>
            <p>
              Esta aplicación web fue creada por el desarrollador{" "}
              <a href="https://portafolio-franco-g.vercel.app/" target="_blank">
                Franco García
              </a>
              . Actualmente se encuentra estudiando Analista en Sistemas y
              programacion web. Para realizar esta aplicación utilizó la API de{" "}
              <a href="https://rickandmortyapi.com/">Rick and Morty</a>
            </p>
            <div className={style.fotoSection}>
              <img className={style.imagen} src={developer} alt="creador" />
              <p>
                -Desarrollador Fullstack <br />
                -Edad: 22 <br />
                -País: Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
