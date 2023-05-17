import React, { useEffect, useState } from 'react'
import Spinner from '../../UI/Spinner/Spinner'
import axiosApi from '../../../axiosApi'

const Brands = () => {
  const [brands, setBrands] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const getBrands = async () => {
      try {
        setLoader(true)
        const { data } = await axiosApi('/car/main_brand_list/')

        if (data) {
          setBrands(data)
        }
        setLoader(false)
      } catch {
        setLoader(false)
      }
    }

    getBrands().catch(e => console.log(e))
  }, [])

  return loader ? (
    <Spinner size={50} />
  ) : (
    <div className="services_brands">
      {brands?.map(item => (
        <a key={`brand${item.id}`} href="#">
          <img src={item.image} alt={item.title} />
        </a>
      ))}
    </div>
  )
}

export default Brands
