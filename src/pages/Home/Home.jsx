import React from "react";
import useTitle from "../../utils/useTitle";
import Slider from "../../components/Slider/Slider";
import "../../components/Slider/slider.css";

const Home = () => {
  useTitle("Home - BotaNest");
  return (
    <div>
      This is home
      <Slider></Slider>
    </div>
  );
};

export default Home;
