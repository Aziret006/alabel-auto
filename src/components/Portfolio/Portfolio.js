import React from 'react'
import Title from '../UI/Title/Title'
import { cars } from '../../data'
import CarCard from '../CarCard/CarCard'
import './Portfolio.css'

const Portfolio = () => (
  <div className="portfolio">
    <div className="container">
      <Title title="Portfolio" />
      <div className="portfolio_row">
        <div className="portfolio_cards">
          {cars?.map((car, i) => (
            <CarCard key={`car.title${i}`} car={car} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
