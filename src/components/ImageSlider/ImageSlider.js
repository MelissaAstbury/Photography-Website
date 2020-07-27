import React, { useState } from "react";

import "./ImageSlider.scss";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [images, setImages] = useState([
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
  ]);

  const goToPrevSlide = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + slideWidth());
  };

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
    }
    // This will not run if we met the if condition above
    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth());
  };

  const slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: "transform ease-out 0.45s",
        }}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="slide"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 60%",
            }}
          ></div>
        ))}
      </div>
      <div
        className="backArrow arrow"
        onClick={goToPrevSlide}
        style={{ display: currentIndex === 0 ? "none" : null }}
      >
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
      <div
        className="nextArrow arrow"
        onClick={goToNextSlide}
        style={{ display: currentIndex === images.length - 1 ? "none" : null }}
      >
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
};
export default ImageSlider;
