import { createSlice } from "@reduxjs/toolkit";
import { fetchContinents } from "./APIData";

const initialState = {
  continents: [],
  isLoading: false,
  error: null,
};

const continentSlice = createSlice({
  name: "continents",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContinents.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchContinents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.continents = action.payload;
    },
    [fetchContinents.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default continentSlice.reducer;
