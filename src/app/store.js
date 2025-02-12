import { configureStore } from "@reduxjs/toolkit";
import commonReducer from '../features/common/commonSlice';
import movieReducer from '../features/movie/movieSlice';
import tvReducer from '../features/tv/tvSlice';
const store = configureStore({
    reducer: {
        tv: tvReducer,
        movie: movieReducer,
        common: commonReducer
    }
});

export default store;