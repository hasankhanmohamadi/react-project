import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Component-index/Navbar";
import Slider from "./Component-index/Slider";
import About from "./Component-index/About";
import Services from "./Component-index/Services";
import Portfolio from "./Component-index/Portfolio";
import Faq from "./Component-index/Faq";
import Team from "./Component-index/Team";
import Client from "./Component-index/Client";
import Contact from "./Component-index/Contact";
import Footer from "./Component-index/Footer";
const App = () =>{
	return (
		<div>
		<Navbar/>
		<Slider/>
		<About/>
		<Services/>
		<Portfolio/>
		<Faq/>
		<Team/>
		<Client/>
		<Contact/>
		<Footer/>
		</div>
		)
};
export default App;