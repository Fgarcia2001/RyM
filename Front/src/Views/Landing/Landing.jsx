import React, { useState } from "react";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
const Landing = () => {
  const [isSignUp, setIsSignUp] = useState(false);
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
