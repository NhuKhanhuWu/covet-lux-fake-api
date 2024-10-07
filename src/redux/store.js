/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartSlide from "./cartSlide";
import orderSlide from "./ordersSlide";

// Persist configuratio
const cartPersistConfig = {
  key: "cart", // Key to store in localStorage
  storage, // LocalStorage as the storage option
};

const orderPersistConfig = {
  key: "orders", // Key to store in localStorage
  storage, // LocalStorage as the storage option
};

// Wrap the reducer with persistReducer
const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlide.reducer
);

const persistedOrderReducer = persistReducer(
  orderPersistConfig,
  orderSlide.reducer
);

// Combine reducers
const rootReducer = combineReducers({
  cart: persistedCartReducer,
  orders: persistedOrderReducer,
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check for redux-persist
    }),
});

// Create a persistor to sync with localStorage
export const persistor = persistStore(store);

export default store;
