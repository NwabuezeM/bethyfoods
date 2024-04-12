import { createSlice } from "@reduxjs/toolkit";
import productData from "../products.json";

const initialState = {
  products: [],
  searchKeyword: "",
};

const headerSearchSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { setProducts, setSearchKeyword } = headerSearchSlice.actions;
export const selectProducts = (state) => state.products;

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const { searchKeyword } = getState().products; // Get the search keyword from the Redux state
    let resultProducts = productData;

    // Filter products based on the search keyword
    if (searchKeyword) {
      resultProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    dispatch(setProducts(resultProducts));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const handleSearch = (searchKeyword) => async (dispatch) => {
  dispatch(setSearchKeyword(searchKeyword));
  dispatch(fetchProducts());
};

export default headerSearchSlice.reducer;
