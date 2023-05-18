import React, { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import AboutCompany from './AboutCompany/AboutCompany'
import AboutAdvantages from './AboutAdvantages/AboutAdvantages'
import AboutWorld from './AboutWorld/AboutWorld'
import Reviews from '../../components/Reviews/Reviews'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Promo class="about" title="Quis fringilla convallis et vitae volutpat." subtitle="Alabel Auto Export" />
      <AboutCompany />
      <AboutAdvantages />
      <AboutWorld />
      <Reviews />
    </>
  )
}

export default About
