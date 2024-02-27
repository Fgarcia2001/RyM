import React from "react";
import style from "./Filter.module.css";
import { Select, SelectItem } from "@nextui-org/react";
import { order, filterGender } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const orden = ["Ascendente", "Descendente"];
const generos = ["Female", "Male", "Genderless", "unknown"];
const Filter = () => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.myFavoritesCopy);
  const handlerOrder = (event) => {
    dispatch(order(event.target.value));
  };

  const handlerFilterGender = (event) => {
    dispatch(filterGender(event.target.value));
  };
  let cant;
  return (
    <div className={style.filter}>
      <Select
        name="orden"
        onChange={handlerOrder}
        color="primary"
        className="max-w-xs"
        label="Orden por ID"
        placeholder="Seleccionar orden"
      >
        {orden.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>

      <Select
        name="generos"
        onChange={handlerFilterGender}
        color="primary"
        className="max-w-xs"
        label="Filtrar por genero"
        placeholder="Seleccionar genero"
      >
        {generos.map((gen) => {
          console.log(gen);
          cant = favoritos.filter((fav) => fav.gender === gen);
          return (
            <SelectItem key={gen} value={gen}>
              {`${gen} (${cant.length})`}
            </SelectItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Filter;
