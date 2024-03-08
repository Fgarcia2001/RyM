import React, { useEffect, useState } from "react";
import { validateMail, validatePass, validateIgual } from "./Validate";
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
  const [errorEmail, setErrorEmail] = useState(" ");
  const [errorPass, setErrorPass] = useState("");
  const [errorPass2, setErrorPass2] = useState("");
  const [iguales, setIguales] = useState(" ");
  const [loading, setLoading] = useState(false);
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
        setErrorEmail(validateMail(event.target.value));
        break;
      case "password":
        setErrorPass(validatePass(event.target.value));
        break;
      case "repPassword":
        setErrorPass2(validatePass(event.target.value));

        break;
      default:
        break;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await dispatch(
      signup({ email: date.email, password: date.password })
    );
    setLoading(false);
    if (response === "Creado") {
      props.state(!props.state);
      alert("Usuario creado");
    }
  };
  const verificar = () => {
    if (errorEmail && errorPass && errorPass2 && iguales) return false;
    return true;
  };

  useEffect(() => {
    setIguales(validateIgual(date.password, date.repPassword));
  }, [date]);
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
            {errorEmail === false && (
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
            class="form-control"
            aria-describedby="passwordHelpBlock"
            type="password"
            name="repPassword"
            value={date.repPassword}
            onChange={handleChange}
          />
        </div>
        <div className={style.errores}>
          Contraseñas entre 5-10 caracteres
          {!errorPass || !errorPass2 ? "❌" : "✅"}
          <br /> Contraseñas iguales {iguales ? "✅" : "❌"}
        </div>
        {!loading ? (
          <div className={style.botones}>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              type="submit"
              disabled={verificar()}
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
        ) : (
          <div className={style.loading}>
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default Signup;
