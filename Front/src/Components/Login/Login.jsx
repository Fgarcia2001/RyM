import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginValidate } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
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
    isValid && navigate("/home");
  }, [isValid]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <label>PASSWORD</label>
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={state.password}
        />
        <input type="submit" />
        <button type="button" onClick={signup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
