import React from 'react'
import UpTitle from '../../../components/UI/UpTitle/UpTitle'
import Title from '../../../components/UI/Title/Title'
import AdvantagesCard from '../../../components/AdvantagesCard/AdvantagesCard'
import { mainAdvantages } from '../../../data'
import './MainAdvantages.css'

import second from '../../../assets/images/02.png'

const MainAdvantages = () => (
  <div className="main_advantages">
    <div className="main_advantages_title">
      <UpTitle uptitle="Why" />
      <Title title="you should consider purchasing a car from Canada?" />
    </div>
    <div className="main_advantages_content">
      <div className="main_advantages_left">
        <p>
          Cars in Canada are often priced lower than in other countries due to the favorable exchange rate, which makes
          buying a car from Canada a more cost-effective option. Additionally, Canada has a reputation for producing
          high-quality vehicles that are built to last, making them a reliable choice for buyers. With a wide selection
          of used cars available, from luxury vehicles to economy cars, and an easy export process with the help of a
          reputable export company, purchasing a car from Canada can be a smart and hassle-free decision.
        </p>
      </div>
      <div className="main_advantages_right">
        {mainAdvantages?.map(item => (
          <AdvantagesCard key={item.title} card={item} />
        ))}
      </div>
    </div>
    <img className="main_advantages_second" src={second} alt="" />
  </div>
)

export default MainAdvantages
