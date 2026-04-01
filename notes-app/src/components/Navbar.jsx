import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center align-middle  m-2 border-2 text-2xl text-lime-50 flex-row gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/notes">Notes</NavLink>
    </div>
  );
};

export default Navbar;
