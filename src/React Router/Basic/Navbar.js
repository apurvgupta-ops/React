import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const styleNavLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "dotted" : "normal",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/aboutpage">About</Link> */}
      <NavLink style={styleNavLink} to="/">
        Home
      </NavLink>
      <NavLink style={styleNavLink} to="/aboutpage">
        About
      </NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};
