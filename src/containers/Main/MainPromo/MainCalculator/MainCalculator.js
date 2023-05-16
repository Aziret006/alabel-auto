import React, { useState } from 'react'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

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
  const [state, setState] = useState({
    auction: '',
    city: '',
    fuel: '',
  })

  const changeHandler = e => {
    const { name, value } = e.target

    setState(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Box
      component="form"
      maxWidth="490px"
      border="1px solid #323131"
      borderRadius="15px"
      sx={{
        marginTop: { lx: '130px', xl: '110px' },
        maxWidth: { lx: '380px', xl: '490px' },
        color: { xs: '#231F1E', lx: '#fff' },
      }}
    >
      <Typography
        variant="h3"
        fontWeight="500"
        textAlign="center"
        marginY="24px"
        textTransform="uppercase"
        sx={{ fontSize: { xs: '24px', lg: '32px', xl: '40px' }, margin: { xs: '20px 0 10px', xl: '24px 0 16px' } }}
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
        <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
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
              value={state.auction}
              name="auction"
              label="Choose an auction"
              onChange={changeHandler}
            >
              <MenuItem value="impact">Impact</MenuItem>
              <MenuItem value="twenty">Twenty</MenuItem>
              <MenuItem value="third">Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <FormControl fullWidth color="orange">
            <InputLabel
              id="select-label2"
              sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }}
              color="orange"
            >
              Cities
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="select-label2"
              id="simple-select2"
              value={state.city}
              name="city"
              label="Cities"
              onChange={changeHandler}
            >
              <MenuItem value="ab">Albany</MenuItem>
              <MenuItem value="cn">Canada</MenuItem>
              <MenuItem value="kg">Kyrgyzstan</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <TextField
            className={classes.mainInput}
            label="Car price in Canada/USA"
            type="number"
            fullWidth
            color="orange"
          />
        </Grid>
        <Grid item xs={6} pr="7px" sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <TextField className={classes.mainInput} label="Year" type="number" fullWidth color="orange" />
        </Grid>
        <Grid item xs={6} pl="7px" sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <TextField className={classes.mainInput} label="Engine capacity" type="number" fullWidth color="orange" />
        </Grid>
        <Grid item xs={12} sx={{ marginY: { xs: '14px', xl: '20px' } }}>
          <FormControl fullWidth color="orange">
            <InputLabel
              id="select-label3"
              sx={{ fontSize: '16px', color: { xs: '#231F1E', lx: '#fff' } }}
              color="orange"
            >
              Fuel type
            </InputLabel>
            <Select
              className={classes.mainSelect}
              labelId="select-label3"
              id="simple-select3"
              value={state.fuel}
              name="fuel"
              label="Fuel type"
              onChange={changeHandler}
            >
              <MenuItem value="diesel">Diesel</MenuItem>
              <MenuItem value="benz">benz</MenuItem>
            </Select>
          </FormControl>
        </Grid>
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
              $ 18 888
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
              $ 1 888
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainCalculator
