/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
  items: [],
  status: "succeeded",
  error: null,
  priceFilter: [0, 999999999999999],
  categoryFilter: "",
  titleFilter: "",
  page: 1,
};

// Thunk to fetch products based on filters
export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async (_, { getState }) => {
    // get filter
    const state = getState().products;

    // Build query string based on filter criteria
    const { categoryFilter, priceFilter, titleFilter, page } = state;
    const query = categoryFilter !== "" ? `category/${categoryFilter}` : "";

    const response = await axios.get(
      `https://fakestoreapi.com/products/${query}`
    );

    // filter products
    let products = response.data;

    // by price
    if (priceFilter[0] <= priceFilter[1]) {
      products = products.filter(
        (product) =>
          product.price >= priceFilter[0] && product.price <= priceFilter[1]
      );
    }

    // by title
    if (titleFilter !== "") {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(titleFilter)
      );
    }

    return products; // Return filtered data from the API
  }
);

// Product slice
const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    editTitle: (state, action) => {
      state.titleFilter = action.payload;
    },
    editCategory: (state, action) => {
      state.categoryFilter = action.payload;
    },
    editPrice: (state, action) => {
      state.priceFilter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Update the state with filtered products
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { editCategory, editPrice, editTitle } = productsSlice.actions;
productsSlice.reducer;
export default productsSlice;
