import React, { useEffect, useState } from "react";
import validate from "./Validate";
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
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPass, setErrorPass] = useState(true);
  const [errorPass2, setErrorPass2] = useState(true);
  const [iguales, setIguales] = useState(false);
  const volver = () => {
    props.state(!props.state);
  };
  const handleChange = (event) => {
    setDate({
      ...date,
      [event.target.name]: event.target.value,
    });
    switch (event.target.name) {
      case "email":
        setErrorEmail(validate(event.target.value));
        break;

      default:
        break;
    }
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
          <div className={style.labelError}>
            <label
              for="exampleFormControlInput1"
              class="font-semibold form-label"
            >
              *Email
            </label>
            {!errorEmail && (
              <span className={style.error}>Ingrese email válido</span>
            )}
          </div>
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
        <div className={style.errores}>
          Contraseña entre 5-10 caracteres
          {!errorPass && !errorPass2 ? "✅" : "❌"}
          <br /> Contraseñas iguales ❌
        </div>

        <div className={style.botones}>
          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="submit"
            disabled={true}
          >
            Crear
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
