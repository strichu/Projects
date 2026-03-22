import {configureStore} from '@reduxjs/toolkit'
import  addItems  from './cartSlice'

export const store = configureStore({
    reducer:{
        cart:addItems
    }
})