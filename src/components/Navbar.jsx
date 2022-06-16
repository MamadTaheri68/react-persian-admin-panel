import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-right">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={toggleSidebar} />
          </Link>
          <h1>ادمین پنل ری اکت ورژن یک</h1>
        </div>
        <div className="nav-left">
          <h1>آیکن های سمت چپ</h1>
        </div>
      </div>
      <nav className={showSidebar ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>item #1</li>
          <li>item #2</li>
          <li>item #3</li>
          <li>item #4</li>
          <li>item #5</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
