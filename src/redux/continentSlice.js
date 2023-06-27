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
  extraReducers: (builder) => {
    builder
      .addCase(fetchContinents.pending, () => ({
        ...initialState,
        isLoading: true,
      }))
      .addCase(fetchContinents.fulfilled, (_, action) => ({
        ...action.payload,
        isLoading: false,
      }))
      .addCase(fetchContinents.rejected, (state, action) => {
        state.error = action.error;
        return { ...state };
      });
  },
});

export default continentSlice.reducer;
