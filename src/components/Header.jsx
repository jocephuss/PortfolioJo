import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/JosLogo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Josiah Rowland Logo" className="logo" />
      <Navigation />
    </header>
  );
};

export default Header;
