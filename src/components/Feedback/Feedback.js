import React, { useState } from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Swal from 'sweetalert2'
import UpTitle from '../UI/UpTitle/UpTitle'

import sheet from '../../assets/images/sheet.png'
import co from '../../assets/images/CO.png'

const useStyles = makeStyles()(theme => ({
  feedback: {
    position: 'relative',
  },
  feedbackInput: {
    '& input': {
      borderRadius: '4px',
    },
    '& label': {
      color: '#A6A5A5',
    },
    '& .css-1has7zg-MuiInputBase-root-MuiFilledInput-root:before': {
      borderColor: '#CBCBCB',
    },
  },
  feedbackCon: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '120px 16px 0',
    zIndex: '2',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '420px',
      paddingTop: '70px',
    },
  },
}))

const Feedback = () => {
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
      title: 'successfully sent!',
    })
  }

  return (
    <Box className={classes.feedback}>
      <img
        src={sheet}
        alt="sheet"
        style={{ position: 'absolute', left: '0', bottom: '0', width: '20%', height: 'auto' }}
      />
      <img src={co} alt="co" style={{ position: 'absolute', right: '0', top: '50px', width: '45%', height: 'auto' }} />
      <Box className={classes.feedbackCon} component="form" onSubmit={onSubmit}>
        <UpTitle uptitle="Lorem ipsum dolor sit amet consectetur.  Nec aliquam ultrices in aliquet." />
        <Grid container maxWidth="550px" mx="auto">
          <Grid item xs={12} sx={{ mb: { xs: '50px', lg: '60px' }, mt: { xs: '30px', lg: '40px' } }}>
            <TextField
              className={classes.feedbackInput}
              name="phone"
              label="Your phone"
              type="tel"
              color="orange"
              fullWidth
              value={state.phone}
              onChange={onChange}
              required
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: { xs: '50px', lg: '60px' } }}>
            <TextField
              className={classes.feedbackInput}
              name="name"
              label="Your E-mail"
              type="text"
              color="orange"
              fullWidth
              value={state.name}
              onChange={onChange}
              required
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <button className="button" type="submit">
              Send
            </button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Feedback
