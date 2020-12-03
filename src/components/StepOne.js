import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import IntTelInput from 'react-intl-tel-input'
import "react-intl-tel-input/dist/main.css"
import { 
  Typography,
  Button,
  Grid,
  CheckBox,
  TexField,
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core'

import { Visibility,
  VisibilityOff} from '@material-ui/icons'
const useStyles = makeStyles({
  mainContainer: {
    display: 'grid',
    justifyContent: 'center',
    position:'relative',
    zIndex: '5',
  },
  formContainer: {
    position: 'relative',
    height: 'auto',
    padding: '2rem'
  },
  inputField: {
    width: "100%",
    margin:"20px 0"
  },
  btn: {
    width:'100%',
    height: '3rem',
    background: 'red',
    color:'#fff',
    "&:hover":{
      backGround: "red"
    }
  }
})

function StepOne() {
  const [showPassWordValue,setShowPasswordValue] =  useState({
    showPassword: false
  })

  const [showConfirmPassWordValue,setShowConfirmPasswordValue] =  useState({
    showPassword: false
  })

  const handleClickShowPassword = ()=> {
    setShowPasswordValue({
      showPassword: !showPassWordValue.showPassword
    })
  }

  const handleClickShowConfirmPassword = ()=> {
    setShowConfirmPasswordValue({
      showConfirmPassword: !showConfirmPassWordValue.showConfirmPassword
    })
  }
  const classes = useStyles()
  return (
    <div className={classes.mainContainer}>
      <Typography cariant="h5" style={{ color: '#999', textAlign: 'center' }}>
        Sign up with email
      </Typography>
      <div className= {classes.formContainer}>
        <form > 
          <TextField
            className={classes.inputField}
            label="First Name"
            variant='outlined'
          />
          <TextField
            className={classes.inputField}
            label="Last Name"
            variant='outlined'
          />
          <IntTelInput
            preferredCountries={[
              "ru"
          ]}/>

          <TextField
            label="Email"
            variant='outlined'
            className={classes.inputField}
          />
          <FormControl variant ="outlined"  className={classes.inputField}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
            labelWidth={70}
            type={showPassWordValue.showPassword ? "text": "password"}
            endAdornment = {
              <InputAdornment position ="end">
                <IconButton 
                  edge="end"
                  onClick={handleClickShowPassword}
                >
                {showPassWordValue.showPassword ? <Visibility/>: <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
            />
          </FormControl>
          <FormControl variant ="outlined"  className={classes.inputField}>
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
            labelWidth={140}
            type={showConfirmPassWordValue.showConfirmPassword ? "text": "password"}
            endAdornment = {
              <InputAdornment position ="end">
                <IconButton 
                  edge="end"
                  onClick={handleClickShowConfirmPassword}
                >
                {showConfirmPassWordValue.showConfirmPassword ? <Visibility/>: <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
            />
          </FormControl>
          <>
            <Button
              variant="contained"
              type ="submit"
              className={classes.btn}
             
            >
              SignUP
            </Button>
          </>
        </form>
      </div>
    </div>
  )
}

export default StepOne
