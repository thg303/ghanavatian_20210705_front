import { configureStore } from '@reduxjs/toolkit'
import videoReducer from '../features/video/VideoSlice'

export const store = configureStore({
  reducer: {
    video: videoReducer
  }
})
