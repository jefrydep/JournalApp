import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { purpletheme } from './'

const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpletheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
   
  )
}

export default AppTheme