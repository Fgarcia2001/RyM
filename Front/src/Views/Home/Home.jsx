import React, { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, setValidateGetFav } from "../../redux/actions";
const Home = () => {
  const token = localStorage.getItem("token");
  const validate = useSelector((state) => state.getFavOnly1);
  const valid = useSelector((state) => state.validate);
  const dispatch = useDispatch();
  useEffect(() => {
    if (valid && !validate) {
      dispatch(setValidateGetFav(true));
      dispatch(getFavorites(token));
    }
  }, []);
  return (
    <div>
      <Cards />
    </div>
  );
};

export default Home;
