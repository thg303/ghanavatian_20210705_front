import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'

import Intro from '../intro/Intro'
import Uploader from '../uploader/Uploader'
import Album from '../album/Album'

const Main = () => {
  const location = useLocation()

  return (
    <main>
      <SlideRoutes location={location}>
        <Route path='/' exact component={Intro} />
        <Route path='/add-video' component={Uploader} />
      </SlideRoutes>
      <Album />
    </main>
  )
}

export default Main
