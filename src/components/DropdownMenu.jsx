import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.css"; 

const DropdownMenu = ({ title, items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="dropdown-btn-text">{title}</span>
        <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
      </div>

      {dropdownOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.to} 
              onClick={() => setDropdownOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;