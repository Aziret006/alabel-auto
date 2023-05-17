import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import UpTitle from '../UI/UpTitle/UpTitle'
import Title from '../UI/Title/Title'
import SubTitle from '../UI/SubTitle/SubTitle'
import Spinner from '../UI/Spinner/Spinner'
import 'swiper/swiper-bundle.css'
import './Reviews.css'

import axiosApi from '../../axiosApi'
import avatar from '../../assets/images/avatar.jpg'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [width, setWidth] = useState(3)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setWidth(1)
    }

    const getReviews = async () => {
      try {
        setLoader(true)
        const { data } = await axiosApi('/car/review/')

        if (data) {
          setReviews(data)
        }
        setLoader(false)
      } catch {
        setLoader(false)
      }
    }

    getReviews().catch(e => console.log(e))
  }, [])

  return (
    <div className="container reviews_con">
      <UpTitle uptitle="Testimonials" />
      <Title title="What say our clients" />
      <SubTitle subtitle="Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet." />
      <div className="reviews_block">
        {loader ? (
          <Spinner size={100} />
        ) : (
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
            {reviews?.map(item => (
              <SwiperSlide key={item.id}>
                <div className="review">
                  <div className="review_top">
                    <div className="review_image_block">
                      <img src={item.avatar || avatar} alt={item.full_name} />
                    </div>
                    <div className="review_info_block">
                      <h6>{item.full_name}</h6>
                      <p>{item.created_at}</p>
                    </div>
                  </div>
                  <div className="review_bottom">
                    <p>{item.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default Reviews
