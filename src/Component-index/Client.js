import React from "react";
import ClientStyle from "./ClientStyle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade, Autoplay, Navigation, Pagination, A11y } from 'swiper';
import client1 from "./image/clients/client-1.png";
import client2 from "./image/clients/client-2.png";
import client3 from "./image/clients/client-3.png";
import client4 from "./image/clients/client-4.png";
import client5 from "./image/clients/client-5.png";
import client6 from "./image/clients/client-6.png";
import client7 from "./image/clients/client-7.png";
import client8 from "./image/clients/client-8.png";
const Client = () => {
	return (
    <div>
    <main id="main">
    <section id="clients" className="clients section-bg">
		<div className="container" data-aos="fade-up">
    <div className="section-title">
    <h2>Clients</h2>
    <p>They trusted us</p>
    </div>
    <Swiper
      // install Swiper modules
      modules={[EffectFade, Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={110}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay:2500,
        disabaleOnInteraction:false
      }}
      pagination={{ clickable: true }}
    >
        <div className="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper align-items-center">
            <SwiperSlide className="swiper-slide"><img src={client1} className="img-fluid" alt="client1"/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={client2} className="img-fluid" alt="client2"/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={client3} className="img-fluid" alt="client3"/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={client4} className="img-fluid" alt="client4"/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={client5} className="img-fluid" alt="client5"/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={client6} className="img-fluid" alt="client6"/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={client7} className="img-fluid" alt="client7"/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={client8} className="img-fluid" alt="client8"/></SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </Swiper>
      </div>
  </section>
    </main>
		</div>
		)
};
export default Client;