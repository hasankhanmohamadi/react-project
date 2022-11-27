import React from "react";
import NavbarStyle from "./NavbarStyle.css";
const Navbar = () => {
	return (
		<div>
		  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>Ninestars</span></a></h1>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">صفحه اصلی</a></li>
          <li><a className="nav-link scrollto" href="#about">درباره ما </a></li>
          <li><a className="nav-link scrollto" href="#services">خدمات ما </a></li>
          <li><a className="nav-link scrollto" href="#portfolio">نمونه کارها </a></li>
          <li><a className="nav-link scrollto" href="#team">معرفی تیم ما </a></li>
          <li className="dropdown"><a href="#"><span>خدمات ماهان سایت </span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className="dropdown"><a href="#"><span>طراحی سایت</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">طراحی سایت ری اکت </a></li>
                  <li><a href="#">طراحی سایت فروشگاهی</a></li>
                  <li><a href="#">طراحی سایت شرکتی</a></li>
                  <li><a href="#">طراحی سایت آموزشی</a></li>
                  <li><a href="#">طراحی سایت  اختصاصی</a></li>
                </ul>
              </li>
              <li><a href="#">طراحی گرافیک</a></li>
              <li><a href="#">طراحی لوگو موشن</a></li>
              <li><a href="#">روتوش عکس</a></li>
              <li><a href="#">امنیت سایت </a></li>
              <li><a href="#">تولید محتوا</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">ارتباط با ما </a></li>
          <li><a className="getstarted scrollto" href="#about">مشاوره رایگان</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
		</div>

		)
};
export default Navbar;