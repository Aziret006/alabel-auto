import React from "react";
import "./Promo.css";

const Promo = (props) => (
  <div className={`${props.class}_promo`}>
    <div className="container promo_con">
      <span>{props.subtitle}</span>
      <h1>{props.title}</h1>
    </div>
  </div>
);

export default Promo;