import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id"></Route>
      </Routes>
    </div>
  );
}

export default App;
