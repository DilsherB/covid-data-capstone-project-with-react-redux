import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";
import continentSlice from "./continentSlice";

export default configureStore({
  reducer: {
    countrySlice,
    continentSlice,
  },
});
