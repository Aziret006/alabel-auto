import React from 'react'
import { Link } from 'react-router-dom'
import './CarCard.css'

import notImage from '../../assets/images/not_image.webp'

const CarCard = ({ car }) => (
  <div className="car_card">
    <div className="car_card_image">
      <img src={car.image || notImage} alt="brand" />
    </div>
    <div className="car_card_text">
      <p className="car_card_second_first">
        <span className="car_title">{car.brand}</span>
        <span className="car_lot">
          Lot: <span>{car.vehicle_id}</span>
        </span>
      </p>
      <p className="car_card_second_line">
        <span>{car.auction_date}</span>
        <span>{car.highlights}</span>
      </p>
      <p className="car_card_third_line">
        Current bid: <span>$ {car.price}</span>
      </p>
    </div>
    <div className="car_card_hover">
      <Link className="button" to={`/auction/${car.id}`}>
        Read more
      </Link>
    </div>
  </div>
)

export default CarCard
