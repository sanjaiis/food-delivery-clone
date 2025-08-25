// === redux/cartSlice.js ===
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exist = state.items.find(i => i.id === item.id);
            if (exist) {
                exist.qty += 1;
            } else {
                state.items.push({ ...item, qty: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        incrementQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.qty += 1;
        },
        decrementQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.qty > 1) item.qty -= 1;
        },
    },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
