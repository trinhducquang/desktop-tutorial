import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                existingItem.price = existingItem.quantity * newItem.pricePerItem;
                // Giữ nguyên totalQuantity không thay đổi
            } else {
                state.items.push({
                    ...newItem,
                    quantity: newItem.quantity,
                    price: newItem.quantity * newItem.pricePerItem
                });
                state.totalQuantity += 1; // Chỉ tăng khi có sản phẩm mới
            }
        },
    },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
