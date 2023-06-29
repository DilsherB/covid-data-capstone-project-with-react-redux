import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";
import continentSlice from "./continentSlice";
import globalSlice from "./globalSlice";

export default configureStore({
  reducer: {
    countrySlice,
    continentSlice,
    globalSlice,
  },
});
