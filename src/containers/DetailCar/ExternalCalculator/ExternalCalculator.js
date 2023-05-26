import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import Timer from '../../../components/Timer/Timer'
import './ExternalCalculator.css'

const ExternalCalculator = ({ car }) => {
  const [state, setState] = useState('')

  const changeHandler = e => {
    const { value } = e.target

    setState(value)
  }

  return (
    <div className="external_calculator">
      <h5 className="external_calculator_car_lot">Lot №{car.vehicle_id}</h5>
      <p className="external_calculator_car_title">{car.title}</p>
      <Timer datetime={car?.datetime} />
      <Grid container justifyContent="space-between">
        <Grid item xs={5} mt="30px">
          <TextField variant="outlined" label="Auction date" value={car.lot_status?.date_auction} disabled />
        </Grid>
        <Grid item xs={5} mt="30px">
          <TextField variant="outlined" label="current bid" value={car.price} disabled />
        </Grid>
        <Grid item xs={12} my="30px">
          <TextField
            fullWidth
            variant="outlined"
            label="Your bid"
            value={state}
            onChange={changeHandler}
            color="orange"
          />
        </Grid>
        <button className="button" type="button">
          Calculate the cost
        </button>
      </Grid>
    </div>
  )
}

export default ExternalCalculator
