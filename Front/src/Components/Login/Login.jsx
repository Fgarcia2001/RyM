import React from "react";
import style from "./Login.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginValidate, setValidate } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
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
    const response = await dispatch(getLoginValidate(state));
    console.log(response.token);
    if (response.token) {
      localStorage.setItem("token", response.token);

      const parsedToken = parseJwt(localStorage.getItem("token"));

      setIsValid(parsedToken.exp * 1000 > Date.now());
    }
  };
  useEffect(() => {
    if (isValid) {
      dispatch(setValidate());
      navigate("/home");
    }
  }, [isValid]);
  return (
    <div className={style.login}>
      <div className={style.acomodo}>
        <div>HOLA</div>
        <form onSubmit={handleSubmit} className={style.form}>
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="tunombre@example.com"
            onChange={handleChange}
            value={state.email}
          />
          <label for="inputPassword5" class="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control"
            aria-describedby="passwordHelpBlock"
            name="password"
            onChange={handleChange}
            value={state.password}
          />
          <div id="passwordHelpBlock" class="form-text">
            Tu contraseña debe tener entre 8-20 caracteres
          </div>
          <button type="submit">Iniciar sesion</button>
          <button type="button" onClick={signup}>
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
