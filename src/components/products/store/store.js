
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import favouritesReducer from './favoritesSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favourites: favouritesReducer,
    }
})

export default store;