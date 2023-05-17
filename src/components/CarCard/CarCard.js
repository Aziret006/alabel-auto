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
      <h5>{car.brand}</h5>
      <p>{car.body}</p>
      <p>
        Price: <span>$ {car.price}</span>
      </p>
    </div>
    <div className="car_card_hover">
      <Link className="button" to="/">
        Read more
      </Link>
    </div>
  </div>
)

export default CarCard
