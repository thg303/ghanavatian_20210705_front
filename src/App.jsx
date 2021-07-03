import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}

export default App
