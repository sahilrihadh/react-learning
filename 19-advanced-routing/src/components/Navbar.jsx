import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle p-5 bg-indigo-50">
      <a href="#" className="text-2xl">
        Logo
      </a>
      <nav className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">Product</Link>
      </nav>
    </div>
  );
};

export default Navbar;
