import React from "react"
import mainLogo from "../../general/img/logo192.png";
import Dropdown from '../../general/Dropdown/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import "./Intro.scss";

const Intro = () => {
  return (
    
    <div className="intro">
   
     <img className="main-logo" src={mainLogo} alt="main illustration"/>
    </div>
  )
}

export default Intro;
