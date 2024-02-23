import React from "react";
import style from "./Cards.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Card from "../Card/Card";
const Cards = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div className={style.cardsContainer}>
      {characters &&
        characters.map(
          ({ id, name, image, gender, origin, status, species }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              gender={gender}
              origin={origin}
              species={species}
              status={status}
              char={true}
            />
          )
        )}
    </div>
  );
};

export default Cards;
