import React, { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, setValidateGetFav } from "../../redux/actions";
const Home = () => {
  const token = localStorage.getItem("token");
  const validate = useSelector((state) => state.getFavOnly1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!validate) {
      dispatch(getFavorites(token));
      dispatch(setValidateGetFav(true));
    }
  }, []);
  return (
    <div>
      <Cards />
    </div>
  );
};

export default Home;
