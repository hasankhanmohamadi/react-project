import React from "react";
import HeroImg from "./image/hero-img.svg";
import SliderStyle from "./SliderStyle.css";
const Slider = () => {
	return (
		<div>
		<section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>ماهان سایت </h1>
          <h2>ارائه دهنده انواع خدمات طراحی سایت و طراحی گرافیک</h2>
          <div>
            <a href="#about" className="btn-get-started scrollto">مشاوره رایگان</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={HeroImg} className="img-fluid animated" alt="HeroImg"/>
        </div>
      </div>
    </div>

  </section>
		</div>
		)
};
export default Slider;