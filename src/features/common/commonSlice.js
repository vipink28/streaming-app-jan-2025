import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apirequests } from "../../helper/api-requests";
import tmdbApi from "../../helper/axios";

const initialState = {
    headerDetails: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderDetails = createAsyncThunk(
    "common/fetchHeaderDetails",
    async (param) => {
        const response = await tmdbApi.get(apirequests.getDetails(param.platform, param.id));
        return response.data;
    }
)

//dispatch(fetchHeadDetails({platform:"tv", id:123})

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderDetails.pending, (state) => {
                state.headerDetails.status = "loading";
            })
            .addCase(fetchHeaderDetails.fulfilled, (state, action) => {
                state.headerDetails.status = "success";
                state.headerDetails.data = action.payload;
            })
            .addCase(fetchHeaderDetails.rejected, (state, action) => {
                state.headerDetails.status = "failed";
                state.headerDetails.error = action.error;
            })
    }
})

export const selectHeaderDetails = (state) => state.common.headerDetails;
export default commonSlice.reducer;