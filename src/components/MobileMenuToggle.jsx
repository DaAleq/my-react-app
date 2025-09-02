import React from 'react';
import './MobileMenuToggle.css';

const MobileMenuToggle = ({ isOpen, onClick }) => {
  return (
    <button className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
    </button>
  );
};

export default MobileMenuToggle;