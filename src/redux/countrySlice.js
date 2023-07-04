import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_COUNTRIES = "https://disease.sh/v3/covid-19/countries";

const initialState = {
  countries: [],
  loading: false,
  error: "",
  country: {},
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const res = await axios.get(URL_COUNTRIES);
    return res.data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.error = "";
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { changeCountry } = countrySlice.actions;

export default countrySlice.reducer;
