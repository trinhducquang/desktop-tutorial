// src/Store/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isMenuOpen: false,
    isClosing: false,
    scrollY: 0,
    currentPage: '' // Thêm trường này
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
    }
  }
});

export const { openMenu, closeMenu, setScrollY, finishClosing, setCurrentPage } = menuSlice.actions;
export default menuSlice.reducer;
