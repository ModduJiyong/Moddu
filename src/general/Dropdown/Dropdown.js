import React, {useState}from 'react';
import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {Link, useLocation} from "react-router-dom";
import "./Dropdown.scss";
import Members from "../../members/Members";

function Dropdown(){

    const [dropdownOpen, setOpen] = useState(false); 
    const toggle = () => setOpen(!dropdownOpen);


    return (
        
        <ButtonDropdown isOpen={dropdownOpen}  toggle={toggle}> 
        <DropdownToggle style={{backgroundColor: 'skyblue', border:0}}  caret>Members</DropdownToggle>
        <DropdownMenu > 
        
            <DropdownItem>
            <Link className="menu Members" to ={"/members/Members"}>Professor</Link></DropdownItem> 

            <DropdownItem >
            <Link className="menu Student" to ={"/members/Members_student"}>Students</Link></DropdownItem> 

        </DropdownMenu>

       
        </ButtonDropdown>


        
        
    )
}

export default Dropdown;