import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-right">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars />
          </Link>
          <h1>ادمین پنل ری اکت ورژن یک</h1>
        </div>
        <div className="nav-left">
            <h1>آیکن های سمت چپ</h1>
        </div>
      </div>
      <nav className="nav-menu"></nav>
    </>
  );
};

export default Navbar;
