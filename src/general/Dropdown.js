import React, {useState}from 'react';
import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {Link, useLocation} from "react-router-dom";
import "./Dropdown.scss";


function Dropdown(){

    const [dropdownOpen, setOpen] = useState(false); 
    const toggle = () => setOpen(!dropdownOpen);


    return (
        
        <ButtonDropdown isOpen={dropdownOpen}  toggle={toggle}> 
        <DropdownToggle style={{backgroundColor: 'skyblue', border:0}} className="drop" caret>Members</DropdownToggle>
        <DropdownMenu > 
        
            <DropdownItem>
            <Link className="menu Members" to ={"/members/Members"}>Professor</Link></DropdownItem> 

            <DropdownItem >
            <Link className="menu Members" to ={"/members/Members"}>Students</Link></DropdownItem> 

        </DropdownMenu>

       
        </ButtonDropdown>


        
        
    )
}

export default Dropdown;