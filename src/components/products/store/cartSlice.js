import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    const { items, timestamp } = JSON.parse(cartItems);
    if (timestamp && Date.now() - timestamp > 2 * 60 * 60 * 1000) {
      // Clear the cart if it has been 2 hours or more
      localStorage.removeItem("cart");
      return [];
    }
    return items || [];
  }
  return [];
};

const saveCartToLocalStorage = (items) => {
  const cart = { items, timestamp: Date.now() };
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const updatedCart = state.filter((item) => item.id !== itemId);
      state.splice(0, state.length, ...updatedCart);
      saveCartToLocalStorage(updatedCart);
    },
    incrementQuantity(state, action) {
      const itemId = action.payload;
      const itemToUpdate = state.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
      saveCartToLocalStorage(state);
    },
    decrementQuantity(state, action) {
      const itemId = action.payload;
      const itemToUpdate = state.find((item) => item.id === itemId);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity--;
      }
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;