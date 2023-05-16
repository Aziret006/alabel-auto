import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

import './SliderComponent.css'
import car from '../../../../assets/images/main_promo_car.png'

SwiperCore.use([Autoplay, Pagination])

const SliderComponent = () => {
  const slides = [
    {
      id: 1,
      imageUrl: car,
    },
    {
      id: 2,
      imageUrl: car,
    },
    {
      id: 3,
      imageUrl: car,
    },
    {
      id: 4,
      imageUrl: car,
    },
  ]

  return (
    <div className="slider-wrapper">
      <Swiper
        spaceBetween={620}
        autoplay={{ delay: 3000 }}
        speed="1800"
        pagination={{ clickable: true }}
        loop
        className="swiper-container"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderComponent
