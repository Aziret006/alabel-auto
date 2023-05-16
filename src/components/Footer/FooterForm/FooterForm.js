import React, { useState } from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Swal from 'sweetalert2'

const useStyles = makeStyles()(() => ({
  footerInput: {
    '& input': {
      background: '#fff',
      borderRadius: '4px',
    },
    '& .Mui-focused': {
      fontSize: '20px',
    },
  },
}))

const FooterForm = () => {
  const { classes } = useStyles()

  const [state, setState] = useState({
    name: '',
    phone: '',
  })

  const onChange = e => {
    const { name, value } = e.target

    setState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    console.log(state)
    Swal.fire({
      toast: true,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      iconColor: '#fff',
      icon: 'success',
      color: '#fff',
      background: '#61dc03',
      position: 'top-end',
      title: 'Данные отправлены!',
    })
  }

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Grid container>
        <Grid item xs={12} mb="20px">
          <TextField
            className={classes.footerInput}
            name="name"
            label="Name"
            type="text"
            color="orange"
            fullWidth
            value={state.name}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} mb="20px">
          <TextField
            className={classes.footerInput}
            name="phone"
            label="Phone"
            type="tel"
            color="orange"
            fullWidth
            value={state.phone}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <button className="button footer_btn" type="submit">
            Send
          </button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterForm
