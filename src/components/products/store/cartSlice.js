import { createSlice } from "@reduxjs/toolkit";

// Function to load cart items from local storage
const loadCartFromLocalStorage = () => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
};

// Initial state for the cart
const initialState = loadCartFromLocalStorage();

// Slice for managing the cart state
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action to add an item to the cart
        addToCart(state, action) {
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
            // Store the updated cart items in local storage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        // Action to remove an item from the cart
        removeFromCart(state, action) {
            const itemId = action.payload;
            const updatedCart = state.filter(item => item.id !== itemId);
            state.splice(0, state.length, ...updatedCart); // Update state immutably
            // Update local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        },
        // Action to increment the quantity of an item in the cart
        incrementQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity++;
            }
            // Store the updated cart items in local storage
            localStorage.setItem('cart', JSON.stringify(state));
        },
        // Action to decrement the quantity of an item in the cart
        decrementQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.find(item => item.id === itemId);
            if (itemToUpdate && itemToUpdate.quantity > 1) {
                itemToUpdate.quantity--;
            }
            // Store the updated cart items in local storage
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});

// Export actions from the cart slice
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Export reducer for the cart slice
export default cartSlice.reducer;