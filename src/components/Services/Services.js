import React from 'react'
import UpTitle from '../UI/UpTitle/UpTitle'
import Title from '../UI/Title/Title'
import SubTitle from '../UI/SubTitle/SubTitle'
import ServicesCard from './ServicesCard/ServicesCard'
import './Services.css'

import image1 from '../../assets/icons/shield.png'
import image2 from '../../assets/icons/chronometer.png'
import image3 from '../../assets/icons/world.png'
import image4 from '../../assets/icons/conversation.png'

import brand1 from '../../assets/icons/tayota.png'
import brand2 from '../../assets/icons/bmw.png'
import brand3 from '../../assets/icons/ford.png'
import brand4 from '../../assets/icons/volf.png'
import brand5 from '../../assets/icons/Lexus-logo.png'
import brand6 from '../../assets/icons/GMC-logo.png'
import brand7 from '../../assets/icons/porche.png'
import brand8 from '../../assets/icons/subaru-emblem.png'
import brand9 from '../../assets/icons/Chevrolet-logo.png'

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9]

const data = [
  {
    image: image1,
    title: 'Services',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. ',
  },
  {
    image: image2,
    title: 'Services',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. ',
  },
  {
    image: image3,
    title: 'Services',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. ',
  },
  {
    image: image4,
    title: 'Services',
    description: 'Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. ',
  },
]

const Services = () => (
  <div className="container services_con">
    <div className="all_title_block">
      <UpTitle uptitle="Our" />
      <Title title="Services" />
      <SubTitle subtitle="Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. " />
    </div>
    <div className="services_cards">
      {data?.map((item, i) => (
        <ServicesCard key={`services${i}`} item={item} />
      ))}
    </div>
    <div className="services_brands_row">
      <div className="services_brands">
        {brands?.map((item, i) => (
          <a key={`brand${i}`} href="#">
            <img src={item} alt="Brand" />
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default Services
