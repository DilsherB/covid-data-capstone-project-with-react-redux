import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_CONTINENTS = "https://disease.sh/v3/covid-19/continents";
const URL_COUNTRIES = "https://disease.sh/v3/covid-19/countries";
const URL_ALL = "https://disease.sh/v3/covid-19/all";

export const fetchContinents = createAsyncThunk(
  "APIData/fetchContinents",
  async () => {
    try {
      const response = await axios.get(URL_CONTINENTS);
      return response.data;
    } catch (error) {
      return "something went wrong!";
    }
  }
);

export const fetchCountries = createAsyncThunk(
  "APIData/fetchCountries",
  async () => {
    try {
      const response = await axios.get(URL_COUNTRIES);
      return response.data;
    } catch (error) {
      return "something went wrong!";
    }
  }
);

export const fetchAll = createAsyncThunk("APIData/fetchAll", async () => {
  try {
    const response = axios.get(URL_ALL);
    return response.data;
  } catch (error) {
    return "something went wrong!";
  }
});
