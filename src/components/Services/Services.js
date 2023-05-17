import React from 'react'
import UpTitle from '../UI/UpTitle/UpTitle'
import Title from '../UI/Title/Title'
import SubTitle from '../UI/SubTitle/SubTitle'
import ServicesCard from './ServicesCard/ServicesCard'
import Brands from './Brands/Brands'
import './Services.css'

import image1 from '../../assets/icons/shield.png'
import image2 from '../../assets/icons/chronometer.png'
import image3 from '../../assets/icons/world.png'
import image4 from '../../assets/icons/conversation.png'

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
      <Brands />
    </div>
  </div>
)

export default Services
