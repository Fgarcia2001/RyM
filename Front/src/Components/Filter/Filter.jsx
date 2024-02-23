import React from "react";
import style from "./Filter.module.css";
import { Select, SelectItem } from "@nextui-org/react";
import { order } from "../../redux/actions";
import { useDispatch } from "react-redux";
const orden = ["Ascendente", "Descendente"];
const Filter = () => {
  const dispatch = useDispatch();
  const handlerOrder = (event) => {
    dispatch(order(event.target.value));
  };
  return (
    <div className={style.filter}>
      <Select
        name="orden"
        onChange={handlerOrder}
        color="secundary"
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
    </div>
  );
};

export default Filter;
