import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Footer.scss";

const Footer=()=>{
    const location = useLocation();
    const pathNameArray = location.pathname.split("/");
    const menuName = pathNameArray[pathNameArray.length - 1];
  
    return (<div className={`footer ${menuName ? "tone-down" : ''}`}>
    <div className="boundary">
      <div className="section-company-info">
        <div className="info-group">
          <span>Moddu</span>
          <span className="sub">연세대학교</span>
        </div>
        <div className="info-group">
          <div className="info-item">
            <span className="sub">담당교수</span>
            <span>장원석</span>
          </div>
          <div className="info-item">
            <span className="sub">사업자등록번호</span>
            <span>xxx-0000-yyyy</span>
          </div>

        </div>

      </div>

    </div>
  </div>
)

}
export default Footer