import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinkItem.css";

const NavLinkItem = ({ to, children, className }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive ? `${className || ''} active` : (className || '')
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;