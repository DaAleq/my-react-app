import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu.jsx";
import NavLinkItem from "./NavLinkItem.jsx";
import MobileMenuToggle from "./MobileMenuToggle.jsx";
import "./Header.css";


const Header = () => {
  
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
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://aitschool.am/_ipx/_/icons/logo-header.svg"
            alt="AIT Logo"
          />
        </Link>
      </div>

      <nav className="header__nav">
        <div className="dropdown" ref={dropdownRef}>
          <div className="dropdown-toggle" onClick={toggleDropdown}>
            <span className="dropdown-btn-text">Դասընթացներ</span>
            <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
          </div>

          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/courses#web" onClick={() => setDropdownOpen(false)}>WEB ծրագրավորում</Link>
              <Link to="/courses#ui-ux" onClick={() => setDropdownOpen(false)}>UI/UX դիզայն</Link>
              <Link to="/courses#graphic" onClick={() => setDropdownOpen(false)}>Գրաֆիկ դիզայն</Link>
              <Link to="/courses#smm" onClick={() => setDropdownOpen(false)}>SMM</Link>
              <Link to="/courses#kids" onClick={() => setDropdownOpen(false)}>AIT Kids</Link>
              <Link to="/courses" onClick={() => setDropdownOpen(false)}>Բոլոր դասընթացները</Link>
            </div>
          )}
        </div>

        <NavLink to="/about">Մեր մասին</NavLink>
        <NavLink to="/shop">Խանութ</NavLink>
        <NavLink to="/contact">Կապ</NavLink>
        <NavLink to="/privacy-policy">Քաղաքականություն</NavLink>
        <NavLink to="/fantasy-space" className="fantasy">Fantasy Space</NavLink>
      </nav>

      <div className="header__cta">
        <Link to="/contact" className="cta-button">Դիմել հիմա</Link>
      </div>
    </header>
  );
};

export default Header;
