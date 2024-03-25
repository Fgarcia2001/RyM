import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Views/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Detail/Detail";
import Favorites from "./Components/Favorites/Favorites";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import CloseSave from "./Components/CloseSafe/CloseSave";
import Save from "./Components/Save/Save";
import NavBarLinks from "./Components/NavBarResponsive/NavBarLinks";
import { motion, AnimatePresence } from "framer-motion";

import "./index.css";
import "./App.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const valid = useSelector((state) => state.validate);
  const open = useSelector((state) => state.openMenu);
  const [save, setSave] = useState(false);
  const [post, setPost] = useState(false);
  useEffect(() => {
    if (!valid) {
      navigate("/");
    }
  }, []);
  return (
    <div className="containerApp">
      {location.pathname !== "/" &&
      !location.pathname.startsWith("/detail/") ? (
        <NavBar setSave={setSave} setPost={setPost} />
      ) : null}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <AnimatePresence>
        {open && <NavBarLinks setSave={setSave} />}
      </AnimatePresence>
      {save && <CloseSave setSave={setSave}></CloseSave>}
      {post && (
        <AnimatePresence>
          <Save setPost={setPost}></Save>
        </AnimatePresence>
      )}
      <Footer />
    </div>
  );
}

export default App;
