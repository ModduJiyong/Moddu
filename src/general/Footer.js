import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Footer.scss";
import logo from "./img/Logo Design_footer.png";
const Footer=()=>{
    const location = useLocation();
    const pathNameArray = location.pathname.split("/");
    const menuName = pathNameArray[pathNameArray.length - 1];
  
    return (
    <div className={`footer ${menuName ? "tone-down" : ''}`}>
    <div className="boundary">
     
      <div className="section-company-info">
        <div className="info-group">
          <span className="sub">연세대학교 의료기기 설계 및 사용적합성 연구실(MDDU)</span>
         <p> </p>
         <p> </p>
          <span className="address">  06229 서울특별시 강남구 언주로 63길 20</span>
          <span className="sub">  20, Eonju-ro 63-gil, Gangnam-gu, Seoul 06229, Korea</span>
        </div>
      </div>
     <img className="logo_footer" src={logo} alt=""/>
    </div>
  </div>
)

}
export default Footer