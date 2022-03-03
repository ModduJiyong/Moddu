import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./NavBar.scss";
import logo from "./img/Logo Design.png";
import search_logo from "./img/search.png";
import Dropdown from "./Dropdown/Dropdown.js";
import Dropdown_research from "./Dropdown/Dropdown_research.js";
import Dropdown_pub from "./Dropdown/Dropdown_pub.js";
import Dropdown_intro from "./Dropdown/Dropdown_intro.js";
import Dropdown_board from "./Dropdown/Dropdown_board.js";
const NavBar=()=>{
    const location=useLocation();
    const pathNameArray=location.pathname.split("/");
    const menuName=pathNameArray[pathNameArray.length-1];
   // <div className={`menu-container ${menuName ? menuName: 'home' }`}>
   //<Link className="menu home" to ={"/"} style={{textDecoration:"none"}}>Introduction</Link>
    return(
        <div className={"nav-bar"}>
            <div className="base-bar">
                <div className="logo-base">
                    <div className="boundary">
                        <Link to={"/"}><img className="logo" src={logo} alt=""/></Link>
                    </div>
                </div>
                
                <div className="menu-base">
                    <div className="menu home">
                        <Dropdown_intro  style={{textDecoration:"none"}}/>
              
                     </div>
                     <div className="menu members">
                        <Dropdown  style={{textDecoration:"none"}}/>
                    </div>
               
                     <div className="menu research">
                         <Dropdown_research  style={{textDecoration:"none"}}/>
                    </div>
          
                     <div className="menu publication">
                        <Dropdown_pub style={{textDecoration:"none"}}/>

                    </div>
              
                    <div className="menu board">
                        <Dropdown_board style={{textDecoration:"none"}}/>

                    </div>

                    <div className="menu search">
                        <img className="search" src={search_logo} alt=""/>

                    </div>
                
                </div>


            </div>
            
          
        </div>
             
      
        
    )
}

export default NavBar;