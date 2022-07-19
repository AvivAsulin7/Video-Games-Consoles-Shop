import React from "react";
import "./Carousel.css";
import { SliderData } from "./SliderData";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="soon">
      <div className="coming-soon">
        <h1 className="coming">COMING SOON</h1>
      </div>
      <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.img} className="img-slider" alt=""></img>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Carousel;
