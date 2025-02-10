import { configureStore } from "@reduxjs/toolkit";
import tvReducer from '../features/tv/tvSlice';

const store = configureStore({
    reducer: {
        tv: tvReducer
    }
});

export default store;