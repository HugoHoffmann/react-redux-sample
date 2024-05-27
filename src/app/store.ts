import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../feature/counter/counter-slice'

export const store = configureStore({
  reducer: {
    count: counterReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>