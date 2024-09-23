import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faFileAlt,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="text">About Me</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "active" : ""}
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
            className={location.pathname === "/resume" ? "active" : ""}
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
            className={location.pathname === "/contact" ? "active" : ""}
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
