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
                existingItem.price = existingItem.quantity * existingItem.pricePerItem;
            } else {
                state.items.push({
                    ...newItem,
                    pricePerItem: newItem.price,
                    quantity: 1,  
                    price: newItem.price  
                });
                state.totalQuantity += 1; 
            }
        },
    },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
