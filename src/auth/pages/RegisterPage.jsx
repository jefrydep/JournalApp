
import { Grid, TextField, Button, Typography, Link } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link as routerLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

import AuthLayout from '../layout/AuthLayout'

const formData = {
  email: 'jefrydep@gmail.com',
  password: 'iamthebe',
  displayName: 'jefry Palomino'
}

const formValidations = {


  email:[(value) =>value.include('@'),'el correo debe de tener kuna @' ],
  password:[(value)=> value.length >= 6 ,'El password debe de tener mas de 6 letras'],
  displayName:[(value)=>value.length >= 1, ' El nombre es obligatorio']


}

const RegisterPage = () => {
  const [formSubmited, setFormSubmited] = useState(false)


  const {

    formState, displayName, email, password, onInputChange,
    isValidForm, displayNameValid, emailValid, passwordValid,

  } = useForm(formData,formValidations);


  const onSubmit = (event) => {

    event.preventDefault();
    setFormSubmited(true)
    if(!isValidForm) return;

    console.log(formState)

  }
  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Comopleto"
              type="text"
              placeholder="jefry Palomino"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="jefrydep@gmail.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}


            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="***************"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>

            <Grid item xs={12}>
              <Button type='submit' variant="contained" fullWidth>
                Crear Cuenta
              </Button>

            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿ya tienes cuenta?</Typography>
            <Link component={routerLink} color='inherit' to='/auth/login'>
              ingresar
            </Link>


          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage