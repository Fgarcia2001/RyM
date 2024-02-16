import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Views/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Detail/Detail";
import Favorites from "./Components/Favorites/Favorites";
import About from "./Components/About/About";
function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" &&
      !location.pathname.startsWith("/detail/") ? (
        <NavBar />
      ) : null}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
