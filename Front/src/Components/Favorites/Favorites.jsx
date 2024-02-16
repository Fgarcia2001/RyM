import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFavorites } from "../../redux/actions";
const Favorites = () => {
  const [validar, setValidar] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  if (!favorites) return <div>Cargando</div>;
  useEffect(() => {
    if (!validar) {
      dispatch(getFavorites(token));
    }
    return () => {
      setValidar(true);
    };
  }, []);

  return (
    <div>
      {favorites.map(({ id, name, species, gender, status, origin, image }) => (
        <Link to={`/detail/${id}`} key={id}>
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            status={status}
            origin={origin}
            gender={gender}
            image={image}
          />
        </Link>
      ))}
    </div>
  );
};

export default Favorites;
