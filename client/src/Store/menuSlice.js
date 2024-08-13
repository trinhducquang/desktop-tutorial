import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isMenuOpen: false,
    isClosing: false,
    currentPage: '',
    scrollY: 0,
    isCartOpen: false, 
  },
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setScrollY: (state, action) => {
      state.scrollY = action.payload;
    },
    finishClosing: (state, action) => {
      state.isClosing = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    openCart: (state) => { 
      state.isCartOpen = true;
    },
    closeCart: (state) => { 
      state.isCartOpen = false;
    },
  },
});

export const { openMenu, closeMenu, setScrollY, finishClosing, setCurrentPage, openCart, closeCart } = menuSlice.actions;
export default menuSlice.reducer;
