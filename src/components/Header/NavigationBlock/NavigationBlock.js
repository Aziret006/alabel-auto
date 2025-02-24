import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationBlock.css'

const items = [
  { name: 'Home', to: '/' },
  { name: 'About us', to: '/about' },
  { name: 'How to buy', to: '/services' },
  { name: 'Auction', to: '/auction' },
  { name: 'Contacts', to: '/contacts' },
]

const NavigationBlock = ({ active, actionMenu, color }) => (
  <nav className={`nav ${active ? 'nav_active' : ''}`}>
    <ul>
      {items.map(item => (
        <li key={item.name}>
          <NavigationItem to={item.to} name={item.name} actionMenu={actionMenu} color={color} />
        </li>
      ))}
    </ul>
  </nav>
)

export default NavigationBlock
