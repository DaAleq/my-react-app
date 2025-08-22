import React, { useState } from "react";
import "./Header.css";

const Header = ({ onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img
            src="https://aitschool.am/_ipx/_/icons/logo-header.svg"
            alt="AIT Logo"
          />
        </a>
      </div>

      <nav className="header__nav">
        <div
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown-toggle">
            <a
              href="#"
              className="dropdown-btn-text"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("courses");
              }}
            >
              Դասընթացներ
            </a>
            <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
          </div>

          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">WEB ծրագրավորում</a>
              <a href="#">UI/UX դիզայն</a>
              <a href="#">Գրաֆիկ դիզայն</a>
              <a href="#">SMM</a>
              <a href="#">AIT Kids</a>
              <a href="#">Բոլոր դասընթացները</a>
            </div>
          )}
        </div>

        <a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate("AboutUS");
        }}>Մեր մասին</a>

       
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate("shop");
        }}>Խանութ</a>

        <a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate("contact");
        }}>Կապ</a>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate("policy");
        }}>Քաղաքականություն</a>
        <a href="#" className="fantasy" onClick={(e) => {
          e.preventDefault();
          onNavigate("fantasy");
        }}>Fantasy Space</a>
      </nav>

      <div className="header__cta">
        <a href="#" className="cta-button">Դիմել հիմա</a>
      </div>
    </header>
  );
};

export default Header;