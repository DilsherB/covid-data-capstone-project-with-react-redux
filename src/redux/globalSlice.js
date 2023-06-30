import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_GLOBAL = "https://disease.sh/v3/covid-19/all";

const initialState = {
  globals: {},
  loading: false,
  error: "",
};

export const fetchGlobalData = createAsyncThunk(
  "global/fetchGlobalData",
  async () => {
    const result = await axios.get(URL_GLOBAL);
    return result.data;
  }
);

const globalSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGlobalData.fulfilled, (state, action) => {
        state.loading = false;
        state.globals = action.payload;
        state.error = "";
      })
      .addCase(fetchGlobalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default globalSlice.reducer;
