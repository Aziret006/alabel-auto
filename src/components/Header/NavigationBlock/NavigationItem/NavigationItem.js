import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.css";

const NavigationItem = (props) => (
  <NavLink
    className={`nav_btn ${props.color && "black_link"}`}
    to={props.to}
    onClick={props.actionMenu}
  >
    {props.name}
  </NavLink>
);

export default NavigationItem;
