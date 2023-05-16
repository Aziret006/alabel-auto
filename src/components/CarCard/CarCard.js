import React from 'react'
import './CarCard.css'
import { Link } from 'react-router-dom'

const CarCard = ({ car }) => (
  <div className="car_card">
    <div className="car_card_image">
      <img src={car.img} alt={car.title} />
    </div>
    <div className="car_card_text">
      <h5>{car.title}</h5>
      <p>{car.description}</p>
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
