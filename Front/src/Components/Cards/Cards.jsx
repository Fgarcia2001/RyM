import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
const Cards = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div>
      {characters &&
        characters.map(({ id, name, image }) => (
          <Link to={`/detail/${id}`} key={id}>
            <Card key={id} id={id} name={name} image={image} />
          </Link>
        ))}
    </div>
  );
};

export default Cards;
