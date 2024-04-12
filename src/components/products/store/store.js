
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import favouritesReducer from './favoritesSlice'
import userReducer from './userSlice'
import searchReducer from './headerSearchSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favourites: favouritesReducer,
        users: userReducer,
        products: searchReducer,
    }
})

export default store;