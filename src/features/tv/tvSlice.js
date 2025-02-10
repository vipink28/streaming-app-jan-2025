import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apirequests } from "../../helper/api-requests";
import tmdbApi from "../../helper/axios";

const initialState = {
    netflixOriginals: {
        status: "idle",
        data: null,
        error: null
    }
};

export const fetchNetflixOrginals = createAsyncThunk(
    "tv/fetchNetflixOrginals",
    async () => {
        const response = await tmdbApi.get(apirequests.getNetflixOriginals);
        return response.data;
    }
)


export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNetflixOrginals.pending, (state, action) => {
                state.netflixOriginals.status = "loading";
            })
            .addCase(fetchNetflixOrginals.fulfilled, (state, action) => {
                state.netflixOriginals.status = "success";
                state.netflixOriginals.data = action.payload;
            })
            .addCase(fetchNetflixOrginals.rejected, (state, action) => {
                state.netflixOriginals.status = "failed";
                state.netflixOriginals.error = action.error;
            })
    }
});

export const selectNetflixOriginals = (state) => state.tv.netflixOriginals;

export default tvSlice.reducer;