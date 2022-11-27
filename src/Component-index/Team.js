import React from "react";
import TeamStyle from "./TeamStyle.css";
import team1 from "./image/team/team-1.jpg";
import team2 from "./image/team/team-2.jpg";
import team3 from "./image/team/team-3.jpg";
import team4 from "./image/team/team-4.jpg";
const Team = () => {
	return (
		<div>
    <main id="main">
		<section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>تیم ماهان سایت </h2>
          <p>افرادی که در ماهان سایت مشغول به فعالیت هستند</p>
        </div>

        <div className="row">

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member">
              <img src={team1} className="img-fluid" alt="team1"/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>حسین محمدی</h4>
                  <span>امنیت وب</span>
                </div>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="member">
              <img src={team2} className="img-fluid" alt="team2"/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>مبینا دریاباری</h4>
                  <span>تولید محتوا و سئو</span>
                </div>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="member">
              <img src={team3} className="img-fluid" alt="team3"/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>محمد اکبری</h4>
                  <span>طراح گرافیک</span>
                </div>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="member">
              <img src={team4} className="img-fluid" alt="team4"/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>پریسا محمدی </h4>
                  <span>توسعه دهنده وب</span>
                </div>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
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
export default Team;