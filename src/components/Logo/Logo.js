import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

import logo from "../../assets/icons/logo.png";

const Logo = () => (
  <Link to="/" className="logo_link">
    <img src={logo} alt="Logo" />
  </Link>
);

export default Logo;
