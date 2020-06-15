import React from "react";

import img from "../../assets/front-cover-newborn.png";

import "./Newborn.scss";

const Newborn = () => {
  return (
    <>
      <div>
        <h2>Newborn</h2>
        <div className="images-area">
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
          <div className="img-container">
            <img src={img} alt="Newborn Baby" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newborn;
