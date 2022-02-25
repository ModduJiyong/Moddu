import React from "react";
import "./Home.scss";
import Intro from "./components/Intro";
import Footer from "../general/Footer";
import Top from "../general/Top";
//import ProductSummary from "./components/ProductSummary";
//import GovTimeline from "./components/GovTimeline";


const Home = () => {
  return (
    <div className="page home">
      <Intro/>
      <Top/>
      <Footer/>
    </div>
  )
}

export default Home;
