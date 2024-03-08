import React from "react";
import style from "./Login.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLoginValidate, setValidate } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import github from "../../assets/github.svg";
const linkG = "https://github.com/Fgarcia2001";
const Login = (props) => {
  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };
  const [isValid, setIsValid] = useState(false);
  const [msgPass, setMsgPass] = useState(false);
  const [msgEmail, setMsgEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const signup = () => {
    props.state(true);
  };
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMsgEmail(false);
    setMsgPass(false);
    setLoading(true);

    const response = await dispatch(getLoginValidate(state));

    if (response.token) {
      localStorage.setItem("token", response.token);

      const parsedToken = parseJwt(localStorage.getItem("token"));
      setLoading(false);
      setIsValid(parsedToken.exp * 1000 > Date.now());
      return;
    }
    if (response === "Contraseña incorrecta") {
      setLoading(false);
      setMsgPass(true);
      setMsgEmail(false);
      return;
    }
    setLoading(false);
    setMsgEmail(true);
    setMsgPass(false);
    return;
  };
  useEffect(() => {
    if (isValid) {
      dispatch(setValidate());
      navigate("/home");
    }
  }, [isValid]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.9,
      }}
      className={style.login}
    >
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <div className={style.labelError}>
            <label
              for="exampleFormControlInput1"
              class="font-semibold text-black form-label"
            >
              Email
            </label>
            {msgEmail && (
              <span className={style.error}> *Email no registrado</span>
            )}
          </div>
          <input
            type="text"
            name="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="tunombre@example.com"
            onChange={handleChange}
            value={state.email}
          />
        </div>
        <div>
          <div className={style.labelError}>
            <label
              for="inputPassword5"
              class="font-semibold text-white form-label"
            >
              Contraseña
            </label>
            {msgPass && (
              <span className={style.error}> *Contraseña incorrecta</span>
            )}
          </div>
          <input
            type="password"
            id="inputPassword5"
            class="form-control"
            aria-describedby="passwordHelpBlock"
            name="password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        {!loading ? (
          <div className={style.botones}>
            <button type="submit" class="btn btn-light ">
              Iniciar sesion
            </button>
            <button type="button" onClick={signup} class="btn btn-secondary">
              Registrarse
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

export default Login;
