import React, { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import SearchCars from './SearchCars/SearchCars'

const Auction = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Promo class="auction" subtitle="Alabel Auto Export" title="Quis fringilla convallis et vitae volutpat." />
      <SearchCars />
    </>
  )
}

export default Auction
