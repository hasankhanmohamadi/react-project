import React from "react";
import ServicesStyle from "./ServicesStyle.css"
const Services = () => {
	return (
		<div>
    <main id="main">
		<section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>خدمات ماهان سایت </h2>
          <p>خدماتی که ماهان سایت به کاربران ارائه می دهد</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="">طراحی لوگو موشن</a></h4>
              <p className="description">طراحی لوگوموشن و انیمیشن یا همان لوگوی متحرک بصورت حرفه ای در ماهان سایت با تیم مجرب و متخصص</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">تولید محتوا</a></h4>
              <p className="description">خدمات تولید محتوا برای سایت های فروشگاهی، شرکتی، شخصی، خبری، سازمانی و … در ماهان سایت بصورت حرفه ای و کاملا سئو شده</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">روتوش عکس</a></h4>
              <p className="description">روتوش و تعمیر انواع عکس های قدیمی، تبدیل عکس سیاه و سفید به رنگی و برعکس با تکنیک ها و روش های متفاوت در ماهان سایت</p>
            </div>
          </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">امنیت سایت </a></h4>
              <p className="description">ماهان سایت با تیمی حرفه ای و متخصص در حوزه امنیت  وب سایت،  می تواند از کسب و کار شما در برابر نفوذ هکر ها محافظت کند.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">طراحی گرافیک</a></h4>
              <p className="description">طراحی انواع کاتالوگ، بروشور، لوگو، کارت ویزیت، لوگو تایپوگرافی، طراحی عکس، بنر سایت، بنر تبلیغاتی و … در ماهان سایت</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">طراحی سایت </a></h4>
              <p className="description">طراحی انواع وب سایت فروشگاهی، شرکتی، بیمه ای، شخصی، سازمانی و … در ماهان سایت به صورت اختصاصی و  سیستم مدیریت محتوا</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>
		</div>
		)
};
export default Services;