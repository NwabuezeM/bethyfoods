import { createSlice } from "@reduxjs/toolkit";

const loadFavouritesFromLocalStorage = () => {
    const favouriteItems = localStorage.getItem('favourites');
    return favouriteItems ? JSON.parse(favouriteItems) : [];
};

const initialState = loadFavouritesFromLocalStorage();

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites(state, action) {
            const { id } = action.payload;
            state.push({ ...action.payload });
            localStorage.setItem('favourites', JSON.stringify(state));
        },
        removeFromFavourites(state, action) {
            const itemId = action.payload;
            const updatedFavourites = state.filter(item => item.id !== itemId);
            state.splice(0, state.length, ...updatedFavourites);

            localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        }
    }
})

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer