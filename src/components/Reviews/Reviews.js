import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import UpTitle from '../UI/UpTitle/UpTitle'
import Title from '../UI/Title/Title'
import SubTitle from '../UI/SubTitle/SubTitle'
import 'swiper/swiper-bundle.css'
import './Reviews.css'

import avatar from '../../assets/images/avatar.jpg'

const slides = [
  {
    id: 1,
    name: 'Viktor Soi',
    avatar,
    date: '23.03.2023',
    review:
      'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. Nunc odio in a integer senectus integer massa euismod iaculis. ',
  },
  {
    id: 2,
    name: 'Viktor Soi',
    avatar,
    date: '23.03.2023',
    review:
      'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. Nunc odio in a integer senectus integer massa euismod iaculis. ',
  },
  {
    id: 3,
    name: 'Viktor Soi',
    avatar,
    date: '23.03.2023',
    review:
      'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. Nunc odio in a integer senectus integer massa euismod iaculis. ',
  },
  {
    id: 4,
    name: 'Viktor Soi',
    avatar,
    date: '23.03.2023',
    review:
      'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. Nunc odio in a integer senectus integer massa euismod iaculis. ',
  },
]

const Reviews = () => {
  const [width, setWidth] = useState(3)

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setWidth(1)
    }
  }, [])

  return (
    <div className="container reviews_con">
      <UpTitle uptitle="Testimonials" />
      <Title title="What say our clients" />
      <SubTitle subtitle="Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet." />
      <div className="reviews_block">
        <Swiper
          grabCursor
          slidesPerView={width}
          spaceBetween={30}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="review">
                <div className="review_top">
                  <div className="review_image_block">
                    <img src={slide.avatar} alt={slide.name} />
                  </div>
                  <div className="review_info_block">
                    <h6>{slide.name}</h6>
                    <p>{slide.date}</p>
                  </div>
                </div>
                <div className="review_bottom">
                  <p>{slide.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews
