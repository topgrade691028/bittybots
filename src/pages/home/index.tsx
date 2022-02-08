import React from "react";
import Slider from "../../components/slider";
import AboutUs from "./Aboutus";
import Collectibles from "./Collectibles";
import Combine from "./Combine";
import Description from "./Description";
import GiveWay from "./GiveWay";
import Mint from "./Mint";
import Presale from "./Presale";
import Question from "./Question";

const Home = () => {
  return (
    <>
      <Collectibles />
      <Mint />
      <Slider />
      <Description />
      <Question />
      <Combine />
      <GiveWay />
      <Presale />
      <AboutUs />
    </>
  );
};

export default Home;
