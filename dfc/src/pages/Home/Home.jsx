import React, { useState } from "react";
import "./Home.css";
import Header from "../../component/Header/Header";
import Exploremenu from "../../component/Exploremenu/Exploremenu";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";
import AppDawnlod from "../../component/AppDawnlode/AppDawnlod";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDawnlod/>
    </div>
  );
};

export default Home;
