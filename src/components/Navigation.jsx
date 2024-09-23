import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faFileAlt,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons"; // Import the required icons from Font Awesome library

const Navigation = () => {
  // Navigation component for the sidebar menu
  const location = useLocation(); // Get the current URL path

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""} // Check if the current URL path is "/"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="text">About Me</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "active" : ""} // Check if the current URL path is "/portfolio"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faFolderOpen} />
            </span>
            <span className="text">Portfolio</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "active" : ""} // Check if the current URL path is "/resume"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faFileAlt} />
            </span>
            <span className="text">Resume</span>
          </Link>
        </li>
      </ul>
      <ul className="sidebar-contact">
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""} // Check if the current URL path is "/contact"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
