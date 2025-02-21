import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";

import notImage from "../../assets/images/not_image.webp";
import copart from "../../assets/icons/copart.png";
import impact from "../../assets/icons/impact.png";

const CarCard = ({ car }) => {
  let auction;

  if (car.auction === "Impact (Canada)") {
    auction = impact;
  } else if (car.auction === "Copart (Canada)") {
    auction = copart;
  }

  return (
    <div className="car_card">
      <div className="car_card_image">
        <img src={car.image || notImage} alt="brand" />
      </div>
      <div className="car_card_text">
        <p className="car_title">{car.brand}</p>
        <p className="car_lot">
          Lot: <span>{car.vehicle_id}</span>
        </p>
        <p className="car_card_second_line">
          <span>{car.auction_date}</span>
        </p>
        <p className="car_card_third_line">
          <span className="card_price">
            Current bid: <span className="card_price_in">$ {car.price}</span>
          </span>
          {auction && (
            <span className="card_auction_icon">
              <img src={auction} alt={car.auction} />
            </span>
          )}
        </p>
      </div>
      <div className="car_card_hover">
        <Link className="button" to={`/auction/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
