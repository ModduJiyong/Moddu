import React from "react"
import "./Publication.scss";

import mainLogo from "../general/img/logo192.png";
import 'bootstrap/dist/css/bootstrap.css';
import Intro from "../home/components/Intro";
import Footer from "../general/Footer";
import Top from "../general/Top";


const Publication = () => {
  return (
    
    <div className="publica">
        <Intro/>
        <Top/>
       
        <Footer/>
    </div>
  )
}

export default Publication;
