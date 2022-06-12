import React from "react";
import Products from "./Products";
import Slider from "../Components/Carousel/Slider";
import Static from "./Static";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="hero">
      <Slider />
      <Products />
      <Static />
      <Footer/>
    </div>
  );
};

export default Home;
