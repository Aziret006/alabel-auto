import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ item }) => (
  <div className="services_card">
    <img src={item.image} alt={item.title} />
    <h5>{item.title}</h5>
    <p>{item.description}</p>
  </div>
);

export default ServicesCard;
