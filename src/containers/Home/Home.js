import React from "react";

import img1 from "../../assets/front-cover-newborn.png";
import img2 from "../../assets/front-cover-baby-smash.png";
import img3 from "../../assets/front-cover-themes.png";
import img4 from "../../assets/front-cover-families.png";
import img5 from "../../assets/front-cover-baby-bump.png";
import img6 from "../../assets/front-cover-baby-splash.png";

import "./Home.scss";

const Home = () => {
  return (
    <div className="images-area">
      <div className="img-container">
        <img src={img1} alt="Newborn Baby" />
      </div>
      <div className="img-container">
        <img src={img2} alt="Toddler enjoying a Cask Smash" />
      </div>
      <div className="img-container">
        <img src={img3} alt="Themes" />
      </div>
      <div className="img-container">
        <img src={img4} alt="Wedding Day" />
      </div>
      <div className="img-container">
        <img src={img5} alt="Maternity" />
      </div>
      <div className="img-container">
        <img src={img6} alt="Toddler enjoying a Water Splash" />
      </div>
    </div>
  );
};

export default Home;
