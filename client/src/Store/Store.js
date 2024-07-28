import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cartReducer from './cartSlice'; // import cartSlice

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer, // thêm cartReducer
  },
});

export default store;
