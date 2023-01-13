import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography,Link } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as routerLink, useFormAction} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignin } from "../../store/auth/thunks";
import AuthLayout from "../layout/AuthLayout";

const LoginPage = () => {
  const {status}= useSelector(state =>state.auth)

  const dispatch = useDispatch();
//aqui ponemos ocmo quiero que lusca nuestro formulario
const {email,password,onInputChange}=useForm({
  email:'jefrydep@gmail.com',
  password:'iamthebest'

});
const isAuthenticating = useMemo(()=> status === 'checking',[status]);


const onSubmit = (event)=>{
  event.preventDefault();
  console.log({ email,password})
  dispatch(checkingAuthentication()); 

}
const  onGoogleSignin = ()=>{
  dispatch(startGoogleSignin())
}
 

  return (
     <AuthLayout title="Login">

        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="jefrydep@gmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="***************"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2 ,mt:2}}>

              <Grid item xs={6} sm={{mb:2}}>
                <Button
                disabled={isAuthenticating}
                type="submit" variant="contained" fullWidth>
                  login
                </Button>

              </Grid>
              <Grid item xs={6} sm={6}>
                <Button 
                disabled={isAuthenticating}
                onClick={onGoogleSignin} variant="contained" fullWidth>
                 
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
