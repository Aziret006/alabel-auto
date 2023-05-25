import React, { useEffect, useState } from 'react'
import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { Link } from 'react-router-dom'
import axiosApi from '../../../../axiosApi'

const useStyles = makeStyles()(theme => ({
  mainInput: {
    '& label': {
      color: 'white',
      [theme.breakpoints.down('lx')]: {
        color: '#231F1E',
      },
    },
    '& .Mui-focused': {
      fontSize: '16px',
    },
    '& input': {
      color: '#fff',
      background: '#3C3C3C',
      borderRadius: '3px',
      [theme.breakpoints.down('lx')]: {
        background: 'transparent',
        color: '#231F1E',
      },
    },
  },
  mainSelect: {
    color: '#fff',
    background: '#3C3C3C',
    borderRadius: '3px',
    '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
      color: '#fff',
    },
    '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
      color: '#fff',
    },
    [theme.breakpoints.down('lx')]: {
      background: 'transparent',
      color: '#231F1E',
      '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
        color: '#231F1E',
      },
      '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
        color: '#231F1E',
      },
    },
  },
}))

const MainCalculator = () => {
  const { classes } = useStyles()
  const [calculator, setCalculator] = useState({
    auctions: [],
    locations: [],
    body: [],
    ports: [],
    countries: [],
    fromPorts: [],
    total: 0,
    service_auto_canada: 0,
  })
  const [calculateData, setCalculateData] = useState({
    auction: '',
    city: '',
    port_canada: '',
    port_destination: '',
    country_destination: '',
    body: '',
    price: 1000,
  })
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const getCalculatorData = async () => {
      try {
        const auctions = await axiosApi('/car/auction_list/')
        const body = await axiosApi('/car/body_for_calculator/')
        const countries = await axiosApi('/car/country_destination/')
        const ports = await axiosApi('/car/port_destination/')

        setCalculator(prev => ({
          ...prev,
          auctions: auctions?.data,
          body: body?.data,
          countries: countries?.data,
          ports: ports?.data,
        }))
      } catch {}
    }

    getCalculatorData().catch()
  }, [])

  useEffect(() => {
    const calculate = async dataCalculator => {
      try {
        setLoader(true)
        const { data } = await axiosApi.post('/car/calculator/', dataCalculator)
        setCalculator(prev => ({
          ...prev,
          total: data?.total || 0,
          service_auto_canada: data?.service_auto_canada || 0,
        }))
        setLoader(false)
      } catch {
        setLoader(false)
      }
    }

    if (
      calculateData.body &&
      calculateData.port_canada &&
      calculateData.port_destination &&
      calculateData.country_destination &&
      calculateData.price
    ) {
      calculate(calculateData).catch()
    }
  }, [calculateData])

  const changeHandler = e => {
    const { name, value } = e.target

    setCalculateData(prev => ({ ...prev, [name]: value }))
  }

  const getLocations = async id => {
    try {
      const { data } = await axiosApi(`/car/city_list/?auction=${id}`)

      if (data) {
        setCalculator(prev => ({
          ...prev,
          locations: data,
        }))
      }
    } catch {}
  }

  const getFromPorts = async (auction, zipCode, location) => {
    try {
      const { data } = await axiosApi(
        `/car/port_delivery_list/?auction=${auction}&zip_code=${zipCode}&location=${location}&body=${calculateData.body}`,
      )

      setCalculator(prev => ({
        ...prev,
        fromPorts: data,
      }))
    } catch {}
  }

  return (
    <Box
      component="form"
      maxWidth="490px"
      border="1px solid #323131"
      borderRadius="15px"
      sx={{
        marginTop: { lx: '110px', xl: '100px' },
        maxWidth: { lx: '380px', xl: '490px' },
        color: { xs: '#231F1E', lx: '#fff' },
      }}
    >
      <Typography
        variant="h3"
        fontWeight="500"
        textAlign="center"
        textTransform="uppercase"
        sx={{ fontSize: { xs: '24px', lg: '32px', xl: '40px' }, margin: { xs: '16px 0 8px', xl: '18px 0 14px' } }}
      >
        <Typography variant="span" color="#F47721">
          ca
        </Typography>
        lculator
      </Typography>
      <Grid
        container
        mx="auto"
        fontSize="18px"
        padding="0 30px 20px"
        sx={{ width: { xs: '280px', lg: '360px', xl: '480px' } }}
      >
        <Grid item xs={6} pr="18px" sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <FormControl fullWidth color="orange">
            <InputLabel
              id="select-label"
              sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }}
              color="orange"
            >
              Choose an auction
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="select-label"
              id="simple-select"
              value={calculateData.auction}
              name="auction"
              label="Choose an auction"
              onChange={changeHandler}
            >
              {calculator.auctions?.length !== 0 ? (
                calculator.auctions.map(auction => (
                  <MenuItem key={`auction${auction.id}`} value={auction.id} onClick={() => getLocations(auction.id)}>
                    {auction.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">---</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <FormControl fullWidth color="orange">
            <InputLabel id="body-label" sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }} color="orange">
              Body
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="body-label"
              id="body"
              value={calculateData.body}
              name="body"
              label="Body"
              onChange={changeHandler}
            >
              {calculator.body?.length !== 0 ? (
                calculator.body.map(body => (
                  <MenuItem key={`body${body.id}`} value={body.id}>
                    {body.title}
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
            <InputLabel
              id="location-label"
              sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }}
              color="orange"
            >
              Location
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="location-label"
              id="location"
              value={calculateData.city}
              name="city"
              label="Location"
              onChange={changeHandler}
            >
              {calculator.locations?.length !== 0 ? (
                calculator.locations.map(location => (
                  <MenuItem
                    key={`location${location.id}`}
                    value={location.id}
                    onClick={() => getFromPorts(location.auction, location.zip_code, location.location)}
                  >
                    {location.location}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">---</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} pr="18px" sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <TextField
            className={classes.mainInput}
            label="Car price in Canada/USA"
            type="number"
            fullWidth
            color="orange"
            name="price"
            value={calculateData.price}
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={6} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <FormControl fullWidth color="orange">
            <InputLabel
              id="Shippingfromtheport-label"
              sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }}
              color="orange"
            >
              Shipping from the port
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="Shippingfromtheport-label"
              id="Shippingfromtheport"
              value={calculateData.port_canada}
              name="port_canada"
              label="Shipping from the port"
              onChange={changeHandler}
            >
              {calculator.fromPorts?.length !== 0 ? (
                calculator.fromPorts.map(port => (
                  <MenuItem key={`fromPort${port.id}`} value={port.id}>
                    {port.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">---</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} pr="18px" sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <FormControl fullWidth color="orange">
            <InputLabel
              id="Destination-label"
              sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }}
              color="orange"
            >
              Destination country
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="Destination-label"
              id="Destination"
              value={calculateData.country_destination}
              name="country_destination"
              label="Destination country"
              onChange={changeHandler}
            >
              {calculator.countries?.length !== 0 ? (
                calculator.countries.map(country => (
                  <MenuItem key={`country${country.id}`} value={country.id}>
                    {country.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">---</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <FormControl fullWidth color="orange">
            <InputLabel id="Port-label" sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }} color="orange">
              Port of destination
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="Port-label"
              id="Port"
              value={calculateData.port_destination}
              name="port_destination"
              label="Port of destination"
              onChange={changeHandler}
            >
              {calculator.ports?.length !== 0 ? (
                calculator.ports.map(port => (
                  <MenuItem key={`port${port.id}`} value={port.id}>
                    {port.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">---</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        {calculator.service_auto_canada ? (
          <Grid
            item
            xs={12}
            fontWeight="500"
            padding="10px 15px"
            sx={{
              background: { lx: '#3C3C3C' },
              borderRadius: '3px',
              margin: { xs: '14px 0 6px', xl: '20px 0 10px' },
              border: { xs: '1px solid #CBCBCB', lx: 'none' },
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography textTransform="uppercase" sx={{ fontSize: { xs: '14px', lx: '15px', xl: '16px' } }}>
                service
              </Typography>
              <Typography color="#F47721" sx={{ fontSize: { xs: '15px', lx: '18px', xl: '24px' } }}>
                $ {calculator.service_auto_canada}
              </Typography>
            </Box>
          </Grid>
        ) : null}
        <Grid
          item
          xs={12}
          fontWeight="500"
          padding="10px 15px"
          sx={{
            background: { lx: '#3C3C3C' },
            borderRadius: '3px',
            margin: { xs: '14px 0 6px', xl: '20px 0 10px' },
            border: { xs: '1px solid #CBCBCB', lx: 'none' },
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography textTransform="uppercase" sx={{ fontSize: { xs: '14px', lx: '15px', xl: '16px' } }}>
              total amount
            </Typography>
            <Typography color="#F47721" sx={{ fontSize: { xs: '15px', lx: '18px', xl: '24px' } }}>
              {loader ? <CircularProgress color="orange" size={20} /> : `$ ${calculator.total}`}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          fontWeight="500"
          padding="10px 15px"
          sx={{ background: { lx: '#3C3C3C' }, borderRadius: '3px', border: { xs: '1px solid #CBCBCB', lx: 'none' } }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography textTransform="uppercase" sx={{ fontSize: { xs: '14px', lx: '15px', xl: '16px' } }}>
              Deposit
            </Typography>
            <Typography color="#F47721" sx={{ fontSize: { xs: '15px', lx: '18px', xl: '24px' } }}>
              $ {Math.floor(calculator.total * 0.1)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt="20px">
          <Link to="/auction" className="button calculator_btn">
            Read more
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainCalculator
