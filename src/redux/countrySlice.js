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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, () => ({
        ...initialState,
        isLoading: true,
      }))
      .addCase(fetchCountries.fulfilled, (_, action) => ({
        ...action.payload,
        isLoading: false,
      }))
      .addCase(fetchCountries.rejected, (state, { error }) => ({
        ...state,
        error,
      }));
  },
});

export default countrySlice.reducer;
