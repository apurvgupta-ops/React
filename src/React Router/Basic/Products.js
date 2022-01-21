import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Seacrh item" />
      <div>
        <Link style={{ padding: "10px" }} to="featured">
          Featured
        </Link>
        <Link to="new">New</Link>
      </div>
      <Outlet />
    </div>
  );
};
