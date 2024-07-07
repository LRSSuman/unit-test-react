import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slice/customerSlice';

export const store = configureStore({
    devTools: true, //use false to avoid state detection from redux dev tools
    // store state
    reducer: {
        customers: customerReducer,
    },
});
