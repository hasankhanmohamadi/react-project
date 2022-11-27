import React from "react";
import PortfolioStyle from "./PortfolioStyle.css";
import portfolio1 from "./image/portfolio/portfolio-1.jpg";
import portfolio2 from "./image/portfolio/portfolio-2.jpg";
import portfolio3 from "./image/portfolio/portfolio-3.jpg";
import portfolio4 from "./image/portfolio/portfolio-4.jpg";
import portfolio5 from "./image/portfolio/portfolio-5.jpg";
import portfolio6 from "./image/portfolio/portfolio-6.jpg";
import portfolio7 from "./image/portfolio/portfolio-7.jpg";
import portfolio8 from "./image/portfolio/portfolio-8.jpg";
import portfolio9 from "./image/portfolio/portfolio-9.jpg";
const Portfolio = () => {
	return (
		<div>
    <main id="main">
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>نمونه کارها </h2>
          <p>آخرین نمونه کارهای ماهان سایت</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">همه</li>
              <li data-filter=".filter-app">طراحی گرافیک</li>
              <li data-filter=".filter-card">لوگو موشن</li>
              <li data-filter=".filter-web">طراحی سایت</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio1} className="img-fluid" alt="portfolio1"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio2} className="img-fluid" alt="portfolio2"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio3} className="img-fluid" alt="portfolio3"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio4} className="img-fluid" alt="portfolio4"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio5} className="img-fluid" alt="portfolio5"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio6} className="img-fluid" alt="portfolio6"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio7} className="img-fluid" alt="portfolio7"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio8} className="img-fluid" alt="portfolio8"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio9} className="img-fluid" alt="portfolio9"/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
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
export default Portfolio;