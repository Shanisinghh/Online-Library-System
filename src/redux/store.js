import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../features/bookSlice'

export const store = configureStore({
  reducer: {
    books:bookReducer
  },
})