import React, { useEffect, useState } from "react";
import style from "./Detail.module.css";
import DetailLoading from "../DetailLoading/DetailLoading";
import { getDetail, clearDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
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
  }, [dispatch]);

  return (
    <div className={style.container}>
      {!character ? (
        <DetailLoading />
      ) : (
        <div className={style.detail}>
          <button className={style.volver} onClick={volver}>
            X
          </button>
          <p className={style.id}>{character.id}</p>
          <div className={style.acomodo}>
            <img className={style.img} src={character.image} alt="detalle" />
            <div className={style.propiedades}>
              <h2>{character.name}</h2>
              <h3>{character.status}</h3>
              <h3>{character.gender}</h3>
              <h3>{character.species}</h3>
              <h3>{character.origin}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
