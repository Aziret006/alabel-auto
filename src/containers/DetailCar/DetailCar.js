import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/UI/Spinner/Spinner'
import CarSlider from './CarSlider/CarSlider'
import ExternalCalculator from './ExternalCalculator/ExternalCalculator'
import './DetailCar.css'
import axiosApi from '../../axiosApi'

const DetailCar = () => {
  const [car, setCar] = useState(null)
  const [loader, setLoader] = useState(false)

  const params = useParams()

  useEffect(() => {
    const getCar = async () => {
      try {
        setLoader(true)
        const { data } = await axiosApi(`/car/detail/${params.id}/`)

        setCar(data)
        setLoader(false)
      } catch {
        setLoader(false)
      }
    }

    getCar().catch()

    window.scrollTo(0, 0)
  }, [params.id])

  return (
    <>
      <div className="toolbar" />
      {loader ? (
        <Spinner size={120} />
      ) : (
        car && (
          <div className="container">
            <div className="car_detail">
              {car.images?.length && <CarSlider images={car.images} />}
              <ExternalCalculator car={car} />
              <div className="car_info">
                <h3>Vehicle Information</h3>
                {car.mileage && (
                  <p key={car.mileage} className="characteristics_p">
                    <span>Mileage:</span>
                    <span />
                    <span>{car.mileage}</span>
                  </p>
                )}
                {car.fuel && (
                  <p key={car.fuel} className="characteristics_p">
                    <span>Fuel type::</span>
                    <span />
                    <span>{car.fuel}</span>
                  </p>
                )}
                {car.engine && (
                  <p key={car.engine} className="characteristics_p">
                    <span>Engine:</span>
                    <span />
                    <span>{car.engine}</span>
                  </p>
                )}
                {car.transmission && (
                  <p key={car.transmission} className="characteristics_p">
                    <span>Transmission:</span>
                    <span />
                    <span>{car.transmission}</span>
                  </p>
                )}
                {car.certificate?.drive_unit && (
                  <p key={car.certificate?.drive_unit} className="characteristics_p">
                    <span>Drive unit:</span>
                    <span />
                    <span>{car.certificate?.drive_unit}</span>
                  </p>
                )}
                {car.certificate?.highlights && (
                  <p key={car.certificate?.highlights} className="characteristics_p">
                    <span>Highlights:</span>
                    <span />
                    <span>{car.certificate?.highlights}</span>
                  </p>
                )}
                {car.certificate?.cylinder && (
                  <p key={car.certificate?.cylinder} className="characteristics_p">
                    <span>Cylinder:</span>
                    <span />
                    <span>{car.certificate?.cylinder}</span>
                  </p>
                )}
                {car.year && (
                  <p key={car.year} className="characteristics_p">
                    <span>Year:</span>
                    <span />
                    <span>{car.year}</span>
                  </p>
                )}
                {car.color && (
                  <p key={car.color} className="characteristics_p">
                    <span>Color:</span>
                    <span />
                    <span>{car.color}</span>
                  </p>
                )}
                {car.body && (
                  <p key={car.body} className="characteristics_p">
                    <span>Body:</span>
                    <span />
                    <span>{car.body}</span>
                  </p>
                )}
              </div>
              <div className="car_info">
                <h3>Venhele Registration Certificate</h3>
                {car.certificate?.VIN && (
                  <p key={car.certificate?.VIN} className="characteristics_p">
                    <span>VIN:</span>
                    <span />
                    <span>{car.certificate?.VIN}</span>
                  </p>
                )}
                {car.certificate?.title_code && (
                  <p key={car.certificate?.title_code} className="characteristics_p">
                    <span>TITLE code:</span>
                    <span />
                    <span>{car.certificate?.title_code}</span>
                  </p>
                )}
                {car.certificate?.title_sale && (
                  <p key={car.certificate?.title_sale} className="characteristics_p">
                    <span>TITLE sale:</span>
                    <span />
                    <span>{car.certificate?.title_sale}</span>
                  </p>
                )}
                {car.certificate?.primary_damage && (
                  <p key={car.certificate?.primary_damage} className="characteristics_p">
                    <span>Main demage:</span>
                    <span />
                    <span>{car.certificate?.primary_damage}</span>
                  </p>
                )}
                {car.certificate?.secondary_damage && (
                  <p key={`1${car.certificate?.secondary_damage}`} className="characteristics_p">
                    <span>Secondary demage:</span>
                    <span />
                    <span>{car.certificate?.secondary_damage}</span>
                  </p>
                )}
                {car.certificate?.airbags && (
                  <p key={`1${car.certificate?.airbags}`} className="characteristics_p">
                    <span>Airbags:</span>
                    <span />
                    <span>{car.certificate?.airbags}</span>
                  </p>
                )}
                {car.certificate?.location && (
                  <p key={`1${car.certificate?.location}`} className="characteristics_p">
                    <span>Location:</span>
                    <span />
                    <span>{car.certificate?.location}</span>
                  </p>
                )}
                {car.certificate?.keys && (
                  <p key={car.certificate?.keys} className="characteristics_p">
                    <span>Keys:</span>
                    <span />
                    <span>{car.certificate?.keys}</span>
                  </p>
                )}
                {car.auction_title && (
                  <p key={car.auction_title} className="characteristics_p">
                    <span>Auction:</span>
                    <span />
                    <span>{car.auction_title}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default DetailCar
