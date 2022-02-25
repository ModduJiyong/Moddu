import React, {useState}from 'react';
import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {Link, useLocation} from "react-router-dom";
import "./Dropdown_research.scss";

function Dropdown_research(){

    const [dropdownOpen, setOpen] = useState(false); 
    const toggle = () => setOpen(!dropdownOpen);


    return (
        
        <ButtonDropdown  isOpen={dropdownOpen}  toggle={toggle}> 
        <DropdownToggle style={{backgroundColor: 'skyblue', border:0}} caret>Research</DropdownToggle>
        <DropdownMenu> 
        
            <DropdownItem>
            <Link className="menu Research_clinical" to ={"/research/research_rc"}>Clinical Study Design</Link></DropdownItem> 
            
            <DropdownItem >
            <Link className="menu UI/UX" to ={"/research/research_uiux"}>UX/UI Design and Usability</Link></DropdownItem> 

            <DropdownItem >
            <Link className="menu Medical" to ={"/research/research_mi"}>Medical Industry Policy</Link></DropdownItem> 

        </DropdownMenu>

       
        </ButtonDropdown>


        
        
    )
}

export default Dropdown_research;