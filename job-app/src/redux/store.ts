import { configureStore } from "@reduxjs/toolkit";
import Jobdata from "./slices/JobJD";
const store = configureStore({
  reducer: {
    Jobdata,
  },
});

export default store;
