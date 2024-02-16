import React, { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { useDispatch } from "react-redux";
import { setLogin, getFavorites } from "../../redux/actions";

const Home = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  return (
    <div>
      <Cards />
    </div>
  );
};

export default Home;
