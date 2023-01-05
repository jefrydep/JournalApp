import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography,Link } from "@mui/material";
import React from "react";
import { Link as routerLink} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const LoginPage = () => {
  return (
     <AuthLayout title="Login">

        <form>
          <Grid container>
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

              <Grid item xs={6} sm={{mb:2}}>
                <Button variant="contained" fullWidth>
                  login
                </Button>

              </Grid>
              <Grid item xs={6} sm={6}>
                <Button variant="contained" fullWidth>
                 
                 <Google/>
                 <Typography sx={{ml:1}}>
                    Google
                 </Typography>
                </Button>

              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={routerLink} color='inherit' to='/auth/register'>
              Crear una Cuenta
              </Link>

            </Grid>

          </Grid>
        </form>
     </AuthLayout>
       
  );
};

export default LoginPage;
