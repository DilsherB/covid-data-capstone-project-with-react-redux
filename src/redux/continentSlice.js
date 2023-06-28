import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_CONTINENT = "https://disease.sh/v3/covid-19/continents";

const initialState = {
  continents: [],
  loading: false,
  error: "",
};

export const fetchContinent = createAsyncThunk(
  "continent/fetchcontinent",
  async () => {
    const res = await axios.get(URL_CONTINENT);
    return res.data;
  }
);

const continentSlice = createSlice({
  name: "continent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContinent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContinent.fulfilled, (state, action) => {
        state.loading = false;
        state.continent = action.payload;
        state.error = "";
      })
      .addCase(fetchContinent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default continentSlice.reducer;
