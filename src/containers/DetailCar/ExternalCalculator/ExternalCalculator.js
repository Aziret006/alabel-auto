import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import Timer from '../../../components/Timer/Timer'
import ModalCalculator from './ModalCalculator/ModalCalculator'
import './ExternalCalculator.css'

const ExternalCalculator = ({ car }) => {
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
          <TextField fullWidth variant="outlined" label="Auction date" value={car.lot_status?.date_auction} disabled />
        </Grid>
        <Grid item xs={12} md={5} sx={{ mt: { xs: '20px', xl: '40px' } }}>
          <TextField fullWidth variant="outlined" label="current bid" value={car.price} disabled />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: '30px', xl: '50px' } }}>
          <TextField
            fullWidth
            required
            type="number"
            variant="outlined"
            label="Your bid"
            value={state}
            onChange={changeHandler}
            color="orange"
          />
        </Grid>
        <button className="button" type="submit">
          Calculate the cost
        </button>
      </Grid>
    </div>
  )
}

export default ExternalCalculator
