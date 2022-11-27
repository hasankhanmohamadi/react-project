import React from "react";
import AboutStyle from "./AboutStyle.css";
import AboutImg from "./image/about-img.svg";
const About = () => {
	return (
	<div>
	<main id="main">
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={AboutImg} className="img-fluid" alt="AboutImg" data-aos="zoom-in"/>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">چرا ماهان سایت </h3>
            <p data-aos="fade-up" data-aos-delay="100">
              ماهان سایت- طراحی انواع وب سایت های فروشگاهی، شرکتی، سازمانی، شخصی و … بصورت اختصاصی و سیستم مدیریت محتوا
            </p>
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
	</div>
	)
};
export default About;