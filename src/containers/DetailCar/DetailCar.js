import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/UI/Spinner/Spinner'
import CarSlider from './CarSlider/CarSlider'
import ExternalCalculator from './ExternalCalculator/ExternalCalculator'
import './DetailCar.css'
import axiosApi from '../../axiosApi'

import Mileage from '../../assets/icons/mileage.svg'
import FuelType from '../../assets/icons/fuel.svg'
import Volume from '../../assets/icons/volume.svg'
import Transmission from '../../assets/icons/transmission.svg'
import Drive from '../../assets/icons/drive.svg'
import Year from '../../assets/icons/year.svg'
import Body from '../../assets/icons/body.svg'
import Color from '../../assets/icons/color.svg'

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
                <div className="info_block">
                  {car.mileage && (
                    <p key={car.mileage}>
                      <img src={Mileage} alt="" />
                      <span>Mileage: </span>
                      <span>{car.mileage}</span>
                    </p>
                  )}
                  {car.fuel && (
                    <p key={car.fuel}>
                      <img src={FuelType} alt="" />
                      <span>Fuel type: </span>
                      <span>{car.fuel}</span>
                    </p>
                  )}
                  {car.engine && (
                    <p key={car.engine}>
                      <img src={Volume} alt="" />
                      <span>Engine: </span>
                      <span>{car.engine}</span>
                    </p>
                  )}
                  {car.transmission && (
                    <p key={car.transmission}>
                      <img src={Transmission} alt="" />
                      <span>Transmission: </span>
                      <span>{car.transmission}</span>
                    </p>
                  )}
                  {car.certificate?.drive_unit && (
                    <p key={car.certificate?.drive_unit}>
                      <img src={Drive} alt="" />
                      <span>Drive unit: </span>
                      <span>{car.certificate?.drive_unit}</span>
                    </p>
                  )}
                  {car.certificate?.highlights && (
                    <p key={car.certificate?.highlights}>
                      <img src={FuelType} alt="" />
                      <span>Highlights: </span>
                      <span>{car.certificate?.highlights}</span>
                    </p>
                  )}
                  {car.certificate?.cylinder && (
                    <p key={car.certificate?.cylinder}>
                      <img src={FuelType} alt="" />
                      <span>Cylinder: </span>
                      <span>{car.certificate?.cylinder}</span>
                    </p>
                  )}
                  {car.year && (
                    <p key={car.year}>
                      <img src={Year} alt="" />
                      <span>Year: </span>
                      <span>{car.year}</span>
                    </p>
                  )}
                  {car.color && (
                    <p key={car.color}>
                      <img src={Color} alt="" />
                      <span>Color: </span>
                      <span>{car.color}</span>
                    </p>
                  )}
                  {car.body && (
                    <p key={car.body}>
                      <img src={Body} alt="" />
                      <span>Body: </span>
                      <span>{car.body}</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="car_info second_block">
                <h3>Sale information</h3>
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
