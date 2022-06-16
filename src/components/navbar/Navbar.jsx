import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import pagesList from "../../data/pagesList";

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
          <div className="nav-left-box">
            <FaIcons.FaUserCircle />
            <span>محمد طاهری</span>
          </div>
          <div className="nav-left-box">
            <FaIcons.FaGlobeAmericas />
            <span>فا/fA</span>
          </div>
          <div className="nav-left-box">
            <FaIcons.FaSignOutAlt />
            <span>خروج</span>
          </div>
        </div>
      </div>
      <nav className={showSidebar ? "nav-menu active" : "nav-menu"}>
        <ul>
          {pagesList.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.route}>
                  {item.icon}
                  <span>{item.title}</span>
                  </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
