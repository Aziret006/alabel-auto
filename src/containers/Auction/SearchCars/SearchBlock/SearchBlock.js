import React, { useEffect, useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Slider, Typography } from '@mui/material'
import axiosApi from '../../../../axiosApi'
import { years } from '../../../../data'

import checkImg from '../../../../assets/icons/check.png'
import Spinner from '../../../../components/UI/Spinner/Spinner'

const useStyles = makeStyles()(theme => ({
  searchBlock: {
    border: '1px solid #CBCBCB',
    borderRadius: '5px',
    padding: '26px 15px',
    [theme.breakpoints.down('lx')]: {
      justifyContent: 'space-between',
    },
  },
  money: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  moneyText: {
    color: '#636262',
    fontSize: '13px',
    fontWeight: '400',
  },
  auctionCard: {
    background: 'rgba(203, 203, 203, 0.23)',
    borderRadius: '3px',
    width: '100%',
    padding: '25px 25px 50px',
    marginBottom: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '& img': {
      width: '80%',
    },
    '& p': {
      position: 'absolute',
      bottom: '10px',
      left: '12px',
      fontWeight: '500',
      fontSize: '16px',
    },
    [theme.breakpoints.down('lx')]: {
      width: '48%',
    },
  },
  auctionRadio: {
    cursor: 'pointer',
    position: 'absolute',
    width: '20px',
    height: '20px',
    top: '12px',
    left: '12px',
    border: '1px solid #CBCBCB',
    borderRadius: '50%',
  },
  auctionRadioActive: {
    background: `#F47721 url(${checkImg}) no-repeat 50%`,
    borderColor: '#F47721',
  },
}))

const SearchBlock = ({ onGetData, search }) => {
  const { classes } = useStyles()
  const [searchData, setSearchData] = useState({
    auctions: [],
    brands: [],
    models: [],
  })
  const [state, setState] = useState({
    auction1: '',
    auction2: '',
    auction3: '',
    auction4: '',
    brand: '',
    model: '',
    min_year: '',
    max_year: '',
    priceFrom: 0,
    priceTo: 100000,
  })
  const [loader, setLoader] = useState(false)

  const handleChange = (event, newValue) => {
    setState(prev => ({ ...prev, priceFrom: newValue[0], priceTo: newValue[1] }))
  }

  useEffect(() => {
    const getSearchData = async () => {
      try {
        setLoader(true)
        const auctions = await axiosApi('/car/auction_list/')
        const brands = await axiosApi('/car/main_brand_list/')

        setSearchData(prev => ({
          ...prev,
          auctions: auctions?.data || [],
          brands: brands?.data || [],
        }))
        setLoader(false)
      } catch {
        setLoader(false)
      }
    }

    getSearchData().catch()
  }, [])

  const getModels = async id => {
    try {
      const models = await axiosApi(`/car/model_list/?brand=${id}`)

      setSearchData(prev => ({
        ...prev,
        models: models?.data,
      }))
      setState(prev => ({
        ...prev,
        model: '',
      }))
    } catch {}
  }

  useEffect(() => {
    if (searchData.brands?.length !== 0) {
      const queryParams = new URLSearchParams(search)
      const brandId = queryParams.get('brand')

      if (brandId) {
        const parsed = parseInt(brandId, 10)

        setState(prev => ({
          ...prev,
          brand: parsed,
        }))
        getModels(parsed).catch()
      }
    }
  }, [search, searchData.brands])

  const changeHandler = e => {
    const { name, value } = e.target

    setState(prev => ({ ...prev, [name]: value }))
  }

  const checkAuction = (id, value) => {
    setState(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    onGetData(state)
  }

  return (
    <Grid container className={classes.searchBlock} component="form" onSubmit={onSubmit}>
      {loader ? (
        <Spinner size={50} />
      ) : (
        searchData.auctions?.map((item, i) => (
          <Grid key={`radio${i}`} item className={classes.auctionCard}>
            <Box
              className={`${classes.auctionRadio} ${
                state[`auction${i + 1}`] === item.id && classes.auctionRadioActive
              }`}
              onClick={() => checkAuction(`auction${i + 1}`, state[`auction${i + 1}`] === item.id ? '' : item.id)}
            />
            <img src={item.image} alt="" />
            <Typography>{item.title}</Typography>
          </Grid>
        ))
      )}
      <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
        <FormControl fullWidth color="orange">
          <InputLabel id="brand-select-label" sx={{ fontSize: '16px', color: '#F47721' }} color="orange">
            Brand
          </InputLabel>
          <Select
            className={classes.mainSelect}
            labelId="brand-select-label"
            id="brand-select"
            value={state.brand}
            name="brand"
            label="Brand"
            onChange={changeHandler}
          >
            {searchData.brands?.length !== 0 ? (
              searchData.brands.map(brand => (
                <MenuItem key={`brand${brand.id}`} value={brand.id} onClick={() => getModels(brand.id)}>
                  {brand.title}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">---</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
        <FormControl fullWidth color="orange">
          <InputLabel id="models-select-label" sx={{ fontSize: '16px', color: '#F47721' }} color="orange">
            Model
          </InputLabel>
          <Select
            className={classes.mainSelect}
            labelId="models-select-label"
            id="models-select"
            value={state.model}
            name="model"
            label="Model"
            onChange={changeHandler}
          >
            {searchData.models?.length !== 0 ? (
              searchData.models.map(model => (
                <MenuItem key={`model${model.id}`} value={model.id}>
                  {model.title}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">---</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
        <FormControl fullWidth color="orange">
          <InputLabel id="min_year-select-label" sx={{ fontSize: '16px', color: '#F47721' }} color="orange">
            Year
          </InputLabel>
          <Select
            className={classes.mainSelect}
            labelId="min_year-select-label"
            id="min_year-select"
            value={state.min_year}
            name="min_year"
            label="Year"
            onChange={changeHandler}
          >
            {years?.length !== 0 ? (
              years.map(year => (
                <MenuItem key={`year${year}`} value={year}>
                  {year}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">---</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
        <FormControl fullWidth color="orange">
          <InputLabel id="min_year-select-label" sx={{ fontSize: '16px', color: '#F47721' }} color="orange">
            Year
          </InputLabel>
          <Select
            className={classes.mainSelect}
            labelId="max_year-select-label"
            id="max_year-select"
            value={state.max_year}
            name="max_year"
            label="Year"
            onChange={changeHandler}
          >
            {years?.length !== 0 ? (
              years.map(year => (
                <MenuItem key={`max_year${year}`} value={year}>
                  {year}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">---</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} m="12px 0 20px">
        <Typography color="#F47721">Price</Typography>
        <Slider
          getAriaLabel={() => 'Money range'}
          value={[state.priceFrom, state.priceTo]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={100000}
          color="orange"
        />
        <Box className={classes.money}>
          <Typography className={classes.moneyText} variant="span">
            $ {state.priceFrom} - {state.priceTo}
          </Typography>
          <Typography className={classes.moneyText} variant="span">
            $ 100, 000
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box maxWidth="550px" m="20px auto 20px">
          <button className="button" type="submit">
            Search
          </button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SearchBlock
