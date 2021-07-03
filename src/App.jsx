import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/header/Header'
import Upload from './components/upload/Upload'
import Album from './components/album/Album'
import Footer from './components/footer/Footer'

export default function App () {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Upload />
        <Album />
      </main>
      <Footer />
    </>
  )
}
