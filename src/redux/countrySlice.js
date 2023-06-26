import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./APIData";

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default countrySlice.reducer;
