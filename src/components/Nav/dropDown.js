import React, { useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./dropDown.css";


const Dropdown = () => {
 const [isOpen, setIsOpen] = useState(false);
 const menuRef = useRef(null);

 const toggleMenu = () => {
   setIsOpen(!isOpen);
    
 };

 const handleOutsideClick = (e) => {
   if (!menuRef.current.contains(e.target)) {
     setIsOpen(false);
   }
 };

  return (
    <div className="dropdown" ref={menuRef}>
      <button className="dropbtn" onClick={toggleMenu}>
        <FaUserCircle className="user-icon" />
        <span className="username">Serrena</span>
      </button>
      {isOpen && (
        
        <div className="dropdown-content">
          <a href="#profile">Profile</a>
          <a href="#settings">Settings</a>
          <a href="#logout">Logout</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
