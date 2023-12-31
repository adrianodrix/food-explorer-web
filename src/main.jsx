import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Plate } from './pages/Plate'
import { NewDish } from './pages/NewDish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.darkTheme}>
      <GlobalStyles />
      <NewDish />
    </ThemeProvider>
  </React.StrictMode>,
)
