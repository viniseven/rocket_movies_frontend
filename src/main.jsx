import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { CreateNote } from './pages/CreateNote'
import { MovieDetails } from './pages/MovieDetails'
import { Profile } from './pages/Profile'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Profile />
     </ThemeProvider>
  </React.StrictMode>
)
