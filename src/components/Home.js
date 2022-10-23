import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  let navigate = useNavigate();
  return (
    <main>
      <div className="main-content">
        <img src={require("../assets/GACHAAA.png")} alt="gachagacha" />

        <button onClick={() => navigate("shop")}>SHOP NOW</button>
      </div>
    </main>
  );
};

export default Home;
