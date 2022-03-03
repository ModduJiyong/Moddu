import React, {useState}from 'react';
import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {Link, useLocation} from "react-router-dom";
import "./Dropdown.scss";
import Members from "../../members/Members";
import { isCompositeComponent } from 'react-dom/test-utils';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


   

function Dropdown(){
     const [dropdownOpen, setOpen] = useState(false); 
    //const toggle = () => setOpen(!dropdownOpen);
    const onMouseEnter=()=>setOpen(!dropdownOpen);
    const onMouseLeave=()=>setOpen(!dropdownOpen);
   
    return (
        
        <ButtonDropdown  isOpen={dropdownOpen} onMouseEnter={onMouseEnter} isClose={dropdownOpen} onMouseLeave={onMouseLeave}> 
          <DropdownToggle style={{backgroundColor: 'white', border:0, color:"black", fontSize:"25px"}} >Publication</DropdownToggle>

    
        <DropdownMenu> 
        
            <DropdownItem>
            <Link className="menu publication" to ={"/publication/Publication"}>Publication</Link></DropdownItem> 


        </DropdownMenu>

       
        </ButtonDropdown>


        
        
    )
}

export default Dropdown;