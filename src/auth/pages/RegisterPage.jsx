 
import { Grid, TextField ,Button, Typography,Link} from '@mui/material'
import React from 'react'
import { Link as routerLink } from 'react-router-dom'

import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  return (
     <AuthLayout title='Register'>
       <form>
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Comopleto"
                type="text"
                placeholder="jefry Palomino"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="jefrydep@gmail.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="***************"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2 ,mt:2}}>

              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>

              </Grid>
              
            </Grid>
           
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>¿ya tienes cuenta?</Typography>
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