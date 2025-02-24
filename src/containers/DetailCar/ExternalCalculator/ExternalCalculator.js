import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Timer from '../../../components/Timer/Timer'
import ModalCalculator from './ModalCalculator/ModalCalculator'
import './ExternalCalculator.css'

const useStyles = makeStyles()(() => ({
  input: {
    '.css-gaf9op-MuiFormLabel-root-MuiInputLabel-root, .css-144wcdf-MuiFormLabel-root-MuiInputLabel-root': {
      fontSize: '1.2rem',
    },
    '.css-14lo706': {
      fontSize: '1rem',
    },
  },
}))

const ExternalCalculator = ({ car }) => {
  const { classes } = useStyles()
  const [state, setState] = useState('')
  const [modal, setModal] = useState(false)

  const handlerModal = e => {
    e.preventDefault()

    setModal(!modal)
  }

  const changeHandler = e => {
    const { value } = e.target

    setState(value)
  }

  return (
    <div className="external_calculator">
      <ModalCalculator
        modal={modal}
        handlerModal={handlerModal}
        currentBid={state}
        calculatorCar={car.calculator}
        city={car.city}
        auction={car.auction}
        body={car.body}
      />
      <h5 className="external_calculator_car_lot">Lot №{car.vehicle_id}</h5>
      <p className="external_calculator_car_title">{car.title}</p>
      <Timer datetime={car?.datetime} />
      <Grid container justifyContent="space-between" component="form" onSubmit={handlerModal}>
        <Grid item xs={12} md={5} sx={{ mt: { xs: '20px', xl: '40px' } }}>
          <TextField
            fullWidth
            className={classes.input}
            variant="outlined"
            label="Auction date"
            value={car.lot_status?.date_auction}
            sx={{ pointerEvents: 'none' }}
          />
        </Grid>
        <Grid item xs={12} md={5} sx={{ mt: { xs: '20px', xl: '40px' } }}>
          <TextField
            fullWidth
            className={classes.input}
            variant="outlined"
            label="Current Bid"
            value={car.price}
            sx={{ pointerEvents: 'none' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: '30px', xl: '50px' } }}>
          <TextField
            fullWidth
            className={classes.input}
            required
            type="number"
            variant="outlined"
            label="Your Bid"
            value={state}
            onChange={changeHandler}
            color="orange"
          />
        </Grid>
        <button className="button" type="submit">
          Calculate
        </button>
      </Grid>
    </div>
  )
}

export default ExternalCalculator
