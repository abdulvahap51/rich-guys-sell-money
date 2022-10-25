import { configureStore } from '@reduxjs/toolkit'
import richguysslice from './richguysslice'
import cryptomarketslice from './cryptomarketslice'
import bazaarslice from './bazaarslice'



export const store = configureStore({
    reducer: {
      richguys:richguysslice,
      cryptomarket:cryptomarketslice,
      market:bazaarslice,
    },
  })