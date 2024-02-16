import React, { useEffect } from "react";
import { getDetail, clearDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const character = useSelector((state) => state.detail);
  const volver = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, []);
  if (!character) return <p>Cargando...</p>;
  return (
    <div>
      <button onClick={volver}>Volver</button>
      <p>{character.id}</p>
      <h2>{character.name}</h2>
      <img src={character.image} alt="detalle" />
      <h3>{character.status}</h3>
      <h3>{character.gender}</h3>
      <h3>{character.species}</h3>
      <h3>{character.origin}</h3>
    </div>
  );
};

export default Detail;
