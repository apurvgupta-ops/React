import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {
  const auth = useAuth();
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
      <NavLink style={styleNavLink} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={styleNavLink} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};
