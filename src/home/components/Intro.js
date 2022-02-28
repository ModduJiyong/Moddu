import React from "react"
import mainLogo from "../../general/img/logo192.png";
import Dropdown from '../../general/Dropdown/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import "./Intro.scss";

const Intro = () => {
  const title="연세대학교 의료기기 산업학과 MDDU"
  return (
    
    <div className="intro">
   
     <img className="main-logo" src={mainLogo} alt="main illustration"/>
  
     <h1>{title}</h1>
    

    </div>
  )
}

export default Intro;
