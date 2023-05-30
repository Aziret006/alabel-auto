import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'

import './CarSlider.css'
import 'swiper/swiper-bundle.css'

const CarSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div className="car_slider">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        navigation
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="car_slides"
      >
        {images?.map(item => (
          <SwiperSlide key={item.id}>
            <div className="swiper-zoom-container">
              <img src={item.image} alt="Car" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="car_slider_thumbs"
      >
        {images?.map(item => (
          <SwiperSlide key={`thumbs${item.id}`}>
            <img src={item.image} alt="thumb" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarSlider
