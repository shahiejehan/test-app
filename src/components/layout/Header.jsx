import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleSubmenu = (index) => {
    setSubmenuVisible(submenuVisible === index ? null : index);
  };

  const handleMenuItemClick = () => {
    setMenuVisible(false);
    setSubmenuVisible(null);
  };

  return (
    <header>
      <div className="nav-brand d-flex">
        <img
          src="/logo512.png"
          alt="logo"
          style={{
            height: "3rem",
            width: "3rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <h1 className="m-2">Student Mgt</h1>
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li className="nav-item" onClick={handleMenuItemClick}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => toggleSubmenu(0)}
            onMouseLeave={() => setSubmenuVisible(null)}
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => toggleSubmenu(1)}
            onMouseLeave={() => setSubmenuVisible(null)}
          >
            <a href="/service">Services</a>
            {submenuVisible === 1 && (
              <ul className="submenu-hr">
                <li onClick={handleMenuItemClick}>
                  <NavLink to="/web-design">web Design</NavLink>
                </li>
                <li onClick={handleMenuItemClick}>
                  <NavLink to="/seo">SEO</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item" onClick={handleMenuItemClick}>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      {/* hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <nav className={`menu ${menuVisible ? "show" : ""}`}>
        <ul>
          <li onClick={handleMenuItemClick}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => toggleSubmenu(0)}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={() => toggleSubmenu(1)}>
            <a href="#">Services</a>
            {submenuVisible === 1 && (
              <ul className="submenu">
                <li onClick={handleMenuItemClick}>
                  <NavLink to="/web-design">Web Design</NavLink>
                </li>
                <li onClick={handleMenuItemClick}>
                  <NavLink to="/seo">SEO</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li onClick={handleMenuItemClick}>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
