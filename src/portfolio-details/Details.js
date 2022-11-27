import React from "react";
import DetailsStyle from "DetailsStyle.css";
import portfolio1 from "./image/portfolio/portfolio-1.jpg";
import portfolio2 from "./image/portfolio/portfolio-2.jpg";
import portfolio3 from "./image/portfolio/portfolio-3.jpg";
const Details = () => {
	return (
		<div><
		<main id="main">
		<section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">

                <div className="swiper-slide">
                  <img src={portfolio1} alt="portfolio2"/>
                </div>

                <div className="swiper-slide">
                  <img src={portfolio2} alt="portfolio2"/>
                </div>

                <div className="swiper-slide">
                  <img src={portfolio3} alt="portfolio3"/>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
		</main>
		/div>
		)
};
export default Details;