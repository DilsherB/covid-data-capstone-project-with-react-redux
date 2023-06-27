import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";

export default configureStore({
  reducer: {
    countrySlice,
  },
});
