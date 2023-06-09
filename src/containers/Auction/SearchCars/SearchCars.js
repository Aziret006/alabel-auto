import React, { useEffect, useState } from 'react'
import { Box, Pagination } from '@mui/material'
import { useLocation } from 'react-router-dom'
import SearchBlock from './SearchBlock/SearchBlock'
import CarCard from '../../../components/CarCard/CarCard'
import Spinner from '../../../components/UI/Spinner/Spinner'
import './SearchCars.css'
import axiosApi from '../../../axiosApi'

const SearchCars = () => {
  const [searchData, setSearchData] = useState(null)
  const [cars, setCars] = useState([])
  const [page, setPage] = useState({
    currentPage: 1,
    lastPage: 0,
  })
  const [loader, setLoader] = useState(false)
  const [active, setActive] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const getCars = async () => {
      try {
        setLoader(true)
        const queryParams = new URLSearchParams(location.search)
        const brandId = queryParams.get('brand')
        let parsed = ''
        if (brandId) parsed = parseInt(brandId, 10)

        const { data } = await axiosApi(`/car/list/?brand=${parsed}`)

        if (data.count && data.count > 15) {
          const number = data.count / 15
          setPage(prev => ({
            ...prev,
            lastPage: Math.trunc(number + 1),
          }))
        } else if (data.count) {
          setPage(prev => ({
            ...prev,
            lastPage: 1,
          }))
        } else {
          setPage(prev => ({
            ...prev,
            lastPage: 0,
          }))
        }

        setCars(data?.results || [])
        setLoader(false)
      } catch {
        setLoader(false)
      }
    }

    getCars().catch()
  }, [location.search])

  const getData = async (dataSearch, check) => {
    window.scrollTo(0, 590)
    setSearchData(dataSearch)
    if (!check) {
      check = ''
      setPage(prev => ({
        ...prev,
        currentPage: 1,
      }))
    }

    let auction = []
    if (dataSearch) {
      auction = [dataSearch?.auction1, dataSearch?.auction2, dataSearch?.auction3, dataSearch?.auction4].filter(
        id => id !== '',
      )
    }

    let mileageFrom = ''
    let mileageTo = ''

    if (dataSearch.mileage) {
      const array = dataSearch.mileage.split('-')

      mileageFrom = array[0]?.replace(/ /g, '').replace(/</g, '') || ''
      mileageTo = array[1]?.replace(/</g, '') || ''
    }

    try {
      setLoader(true)
      const { data } = await axiosApi(
        `/car/list/?auction=${auction?.join(',')}&brand=${dataSearch?.brand || ''}&model=${
          dataSearch?.model || ''
        }&min_year=${dataSearch?.min_year || ''}&max_year=${dataSearch?.max_year || ''}&priceFrom=${
          dataSearch?.priceFrom || ''
        }&priceTo=${dataSearch?.priceTo || ''}${
          check && `&page=${check}`
        }&mileage_from=${mileageFrom}&mileage_to=${mileageTo}&color_f=${dataSearch.color}&fuel_type=${
          dataSearch.fuel_type
        }&transmission=${dataSearch.transmission}&location=${dataSearch.location}&sort_date=${
          dataSearch.sort_date
        }&sort_year=${dataSearch.sort_year}`,
      )

      if (data.count && data.count > 15) {
        const number = data.count / 15
        setPage(prev => ({
          ...prev,
          lastPage: Math.trunc(number + 1),
        }))
      } else if (data.count) {
        setPage(prev => ({
          ...prev,
          lastPage: 1,
        }))
      } else {
        setPage(prev => ({
          ...prev,
          lastPage: 0,
        }))
      }

      setCars(data?.results || [])
      setLoader(false)
    } catch {
      setLoader(false)
      setPage(prev => ({
        ...prev,
        lastPage: 0,
      }))
      setCars([])
    }
  }

  const onChange = (e, value) => {
    setPage(prev => ({
      ...prev,
      currentPage: value,
    }))

    getData(searchData, value).catch()
  }

  const onShowFilter = () => {
    setActive(!active)
  }

  return (
    <div className="container cars_block">
      <div className={`filter_menu${active ? ' filter_menu_active' : ''}`} onClick={onShowFilter}>
        <span>Search filter</span>
      </div>
      <div className={`cars_left${active ? ' cars_left_active' : ''}`}>
        <SearchBlock onGetData={getData} search={location.search} />
      </div>
      <div className="cars_right">
        {loader ? (
          <Spinner size={80} />
        ) : (
          <>
            <div className="search_cars">
              {page.lastPage === 0 && <h2 className="cars_not_found">Cars not found</h2>}
              {cars?.map(car => (
                <div key={car.id} className="car">
                  <CarCard car={car} />
                </div>
              ))}
            </div>
            <Box width="max-content" m="20px auto">
              <Pagination count={page.lastPage} page={page.currentPage} onChange={onChange} />
            </Box>
          </>
        )}
      </div>
    </div>
  )
}

export default SearchCars
