import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./NavBar.scss";
import logo from "./img/logo192.png";
import Dropdown from "./Dropdown.js";
import Dropdown_research from "./Dropdown_research.js";
const NavBar=()=>{
    const location=useLocation();
    const pathNameArray=location.pathname.split("/");
    const menuName=pathNameArray[pathNameArray.length-1];


    return(
        <div className={"nav-bar"}>
            <div className="boundary">
                <Link to={"/"}><img className="logo" src={logo} alt=""/></Link>
            <div className={`menu-container ${menuName ? menuName: 'home' }`}>
                <Link className="menu home" to ={"/"}>Home</Link>
                <div className="divider"/>
             <div className="members">
                <Dropdown/>
            </div>
                <div className="divider"/>
              <div className="research">
                <Dropdown_research/>
              </div>
              <div className="divider"/>
              <div className="publication">
                <Link className="menu Publication" to={"/"}>Publication</Link>
              </div>
            </div> 
        </div>
        </div>
    )
}

export default NavBar;