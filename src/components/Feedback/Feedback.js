import React, { useState } from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Swal from 'sweetalert2'
import UpTitle from '../UI/UpTitle/UpTitle'

import sheet from '../../assets/images/sheet.png'
import co from '../../assets/images/CO.png'
import axiosApi from '../../axiosApi'

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

const Feedback = ({ footer }) => {
  const { classes } = useStyles()

  const [state, setState] = useState({
    name: '',
    phone: '',
  })
  const [loader, setLoader] = useState(false)

  const onChange = e => {
    const { name, value } = e.target

    setState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async e => {
    e.preventDefault()

    try {
      setLoader(true)
      await axiosApi.post('/car_main/feedback/', state)

      setLoader(false)
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
    } catch (err) {
      setLoader(false)
      Swal.fire({
        toast: true,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        iconColor: '#fff',
        icon: 'error',
        color: '#fff',
        background: '#dc030a',
        position: 'top-end',
        title: `${err.response.data.phone && err.response.data.phone}`,
      })
    }
  }

  return footer ? (
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
          <button className="button footer_btn" type="submit" disabled={loader}>
            Send
          </button>
        </Grid>
      </Grid>
    </Box>
  ) : (
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
            <button className="button" type="submit" disabled={loader}>
              Send
            </button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Feedback
