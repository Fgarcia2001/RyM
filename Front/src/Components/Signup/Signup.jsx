import React, { useEffect, useState } from "react";
import style from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.9,
      }}
      className={style.signup}
    >
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label
            for="exampleFormControlInput1"
            class="font-semibold form-label"
          >
            *Email
          </label>
          <input
            class="form-control"
            placeholder="tunombre@example.com"
            type="text"
            name="email"
            value={date.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label for="inputPassword5" class="font-semibold form-label">
            *Contraseña
          </label>
          <input
            class="form-control"
            aria-describedby="passwordHelpBlock"
            type="password"
            value={date.password}
            name="password"
            onChange={handleChange}
          />
          <label for="inputPassword5" class="font-semibold  form-label">
            *Repetir contraseña
          </label>
          <input
            id="inputPassword5"
            class="form-control"
            aria-describedby="passwordHelpBlock"
            type="password"
            name="repPassword"
            value={date.repPassword}
            onChange={handleChange}
          />
        </div>
        <div className={style.botones}>
          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="submit"
          >
            Create
          </button>
          <button
            type="button"
            onClick={volver}
            class="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Volver
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Signup;
