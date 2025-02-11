import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movie/movieSlice';
import tvReducer from '../features/tv/tvSlice';
const store = configureStore({
    reducer: {
        tv: tvReducer,
        movie: movieReducer
    }
});

export default store;