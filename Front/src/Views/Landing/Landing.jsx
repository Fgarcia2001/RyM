import React, { useEffect, useState } from "react";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Landing = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const valid = useSelector((state) => state.validate);
  const navigate = useNavigate();
  useEffect(() => {
    if (valid) {
      navigate("/home");
      alert("Cierre sesion por favor");
    }
  }, []);
  return (
    <div>
      {!isSignUp ? (
        <Login state={setIsSignUp} />
      ) : (
        <Signup state={setIsSignUp} />
      )}
    </div>
  );
};

export default Landing;
