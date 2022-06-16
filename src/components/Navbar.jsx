import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import pagesList from "../data/pagesList";

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
          <h4>رزرو آیکن های سمت چپ</h4>
        </div>
      </div>
      <nav className={showSidebar ? "nav-menu active" : "nav-menu"}>
        <ul>
          {pagesList.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.route}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
