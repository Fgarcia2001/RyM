import React from "react";

const Card = ({ id, name, image }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <img src={image} alt="character" />
    </div>
  );
};

export default Card;
