import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>

      <button onClick={() => navigate("shop")}>SHOP NOW</button>
    </>
  );
};

export default Home;
