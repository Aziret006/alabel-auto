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
    title: 'Clean',
    description: 'Vehicles in good condition, with no damage, and not involved in accidents or insurance claims.',
  },
  {
    image: image2,
    title: 'Repossessed',
    description: 'Vehicles with damage requiring repairs (accidents, fires, floods, and other incidents)',
  },
  {
    image: image3,
    title: 'Recovered',
    description: 'Vehicles that were stolen and later recovered by owners or insurance companies.',
  },
  {
    image: image4,
    title: 'Fleet',
    description: 'Vehicles previously used by corporate clients or in rental programs.',
  },
  {
    image: image1,
    title: 'Lease',
    description: 'Vehicles previously under lease.',
  },
  {
    image: image2,
    title: 'Rental',
    description: 'Vehicles that were used for rentals.',
  },
  {
    image: image3,
    title: 'Charity',
    description: 'Vehicles donated by charitable organizations',
  },
  {
    image: image4,
    title: 'Government',
    description: 'Vehicles previously owned by government agencies',
  },
  {
    image: image1,
    title: 'Repairable',
    description: 'Vehicles that cannot be repaired or registered for road use.',
  },
]

const Services = () => (
  <div className="container services_con">
    <div className="all_title_block">
      <UpTitle uptitle="Our" />
      <Title title="Services" />
      <SubTitle subtitle="At Canadian auctions, various categories of vehicles are available, classified as follows: " />
    </div>
    <div className="services_cards_row">
      <div className="services_cards">
        {data?.map((item, i) => (
          <ServicesCard key={`services${i}`} item={item} />
        ))}
      </div>
    </div>
    <div className="services_brands_row">
      <Brands />
    </div>
  </div>
)

export default Services
