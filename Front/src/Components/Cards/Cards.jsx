import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
const Cards = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div>
      {characters.map((char) => (
        <Link>
          <Card name={char.name} image={char.image} gender={char.gender} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
