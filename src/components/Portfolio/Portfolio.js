import React, { useEffect, useState } from 'react'
import Title from '../UI/Title/Title'
import CarCard from '../CarCard/CarCard'
import './Portfolio.css'
import axiosApi from '../../axiosApi'
import Spinner from '../UI/Spinner/Spinner'

const Portfolio = () => {
  const [cars, setCars] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const getCars = async () => {
      try {
        setLoader(true)
        const { data } = await axiosApi('/car_main/')

        if (data) {
          setCars(data)
        }
        setLoader(false)
      } catch {
        setLoader(false)
      }
    }

    getCars().catch()
  }, [])

  return (
    <div className="portfolio">
      <div className="container">
        <Title title="Portfolio" />
        <div className="portfolio_row">
          {loader ? (
            <Spinner size={100} />
          ) : (
            <div className="portfolio_cards">
              {cars?.map((car, i) => (
                <CarCard key={`car.title${i}`} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
