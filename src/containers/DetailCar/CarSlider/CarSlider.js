import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Fancybox from "../../../components/Fancybox/Fancybox";

import "./CarSlider.css";
import "swiper/swiper-bundle.css";

const CarSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="car_slider">
      <Fancybox options={{ infinite: false, zoom: false }}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          navigation
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="car_slides"
        >
          {images?.map((item) => (
            <SwiperSlide key={item.id}>
              <div data-fancybox="gallery" data-src={item.image}>
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
          {images?.map((item) => (
            <SwiperSlide key={`thumbs${item.id}`}>
              <img src={item.image} alt="thumb" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fancybox>
    </div>
  );
};

export default CarSlider;
