
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import favouritesReducer from './favoritesSlice'
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favourites: favouritesReducer,
        users: userReducer,
    }
})

export default store;