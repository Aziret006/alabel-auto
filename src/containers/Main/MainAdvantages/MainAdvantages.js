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
          When ordering a car from Canada, you will receive a verified vehicle history with a low and confirmed mileage.
          Here, cars undergo regular technical inspections, and factory and additional warranties from authorized
          dealers provide additional protection and confidence to buyers. Canadian cars are also more adapted to harsh
          weather conditions. If you are looking for a pickup truck, Canada is famous for its powerful pickups that are
          popular worldwide. It is important to note that, unlike American vehicles, Canadian cars have speedometers and
          fuel gauges displaying speed in kilometers and fuel volume in liters, which can be an important factor to
          consider. Prices for Canadian cars are highly attractive, and thanks to the favorable exchange rate between
          the Canadian and American dollars, you can save even more. We cover all mandatory tax payments when purchasing
          a car for export. Buying a car at auctions in Canada offers the advantage of less competition among buyers.
          Additionally, statistics show that container shipping from Canada to Europe is faster than from the US, which
          is another benefit for our customers. We offer flexible payment terms to make purchasing a car from Canada
          accessible to you. We value principles of transparency and honesty in all our transactions. You can be assured
          that you will receive complete information about the condition and history of the vehicle, as well as
          transparent purchasing and delivery terms.
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
