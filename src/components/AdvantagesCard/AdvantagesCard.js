import React from 'react'
import './AdvantagesCard.css'

const AdvantagesCard = ({ card }) => (
  <div className="advantages_card">
    <div className="advantages_card_image">
      <img src={card.img} alt="Alabel" />
    </div>
    <p>{card.title}</p>
  </div>
)

export default AdvantagesCard
