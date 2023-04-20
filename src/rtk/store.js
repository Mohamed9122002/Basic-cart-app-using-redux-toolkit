import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products-slices'
import  cartSlice  from './slices/cart-slices'
export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
    }
})