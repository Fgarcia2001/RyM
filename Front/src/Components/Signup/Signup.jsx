import React, { useEffect, useState } from "react";
import style from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [date, setDate] = useState({
    email: "",
    password: "",
    repPassword: "",
  });
  const volver = () => {
    props.state(!props.state);
  };
  const handleChange = (event) => {
    setDate({
      ...date,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup({ email: date.email, password: date.password }));
    props.state(!props.state);
  };
  useEffect(() => {}, [date]);
  return (
    <div className={style.signup}>
      <form type="submit" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={date.email}
          onChange={handleChange}
        />
        <label>Contraseña</label>
        <input
          type="password"
          value={date.password}
          name="password"
          onChange={handleChange}
        />
        <label>Repetir contraseña</label>
        <input
          type="password"
          name="repPassword"
          value={date.repPassword}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
        <button onClick={volver}>Volver</button>
      </form>
    </div>
  );
};

export default Signup;
