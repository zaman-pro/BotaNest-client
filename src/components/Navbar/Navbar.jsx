import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex gap-5">
      <NavLink className="text-lg font-medium btn" to="/">
        Home
      </NavLink>
      <NavLink className="text-lg font-medium btn" to="/add-plants">
        Add Plants
      </NavLink>
    </div>
  );
};

export default Navbar;
