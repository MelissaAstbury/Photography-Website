import React from "react";
import { useHistory } from "react-router-dom";

import img1 from "../../assets/front-cover-newborn.png";
import img2 from "../../assets/front-cover-baby-smash.png";
import img3 from "../../assets/front-cover-themes.png";
import img4 from "../../assets/front-cover-families.png";
import img5 from "../../assets/front-cover-baby-bump.png";
import img6 from "../../assets/front-cover-baby-splash.png";
import mainImage from "../../assets/main-image.png";

import Button from "../../components/UI/Button/Button";

import "./Home.scss";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="main-image-container">
        <img src={mainImage} alt="Woman doing photography" />
        <h2 className="sub-title">...because every picture tells a story...</h2>
      </div>
      <div className="images-area">
        <div className="img-container">
          <img src={img1} alt="Newborn Baby" />
          <Button
            clicked={() => history.push("/newborn")}
            className="img-button"
          >
            NEWBORN
          </Button>
        </div>
        <div className="img-container">
          <img src={img2} alt="Toddler enjoying a Cask Smash" />
          <Button
            clicked={() => history.push("/cakesmash")}
            className="img-button"
          >
            CAKE SMASH
          </Button>
        </div>
        <div className="img-container">
          <img src={img3} alt="Themes" />
          <Button className="img-button">OCCASIONS</Button>
        </div>
        <div className="img-container">
          <img src={img4} alt="Family" />
          <Button className="img-button">FAMILY</Button>
        </div>
        <div className="img-container">
          <img src={img5} alt="Maternity" />
          <Button className="img-button">MATERNITY</Button>
        </div>
        <div className="img-container">
          <img src={img6} alt="Toddler enjoying a Water Splash" />
          <Button className="img-button">SPLASH FUN</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
