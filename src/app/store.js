import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "../coinSlice";

export const store = configureStore({
    reducer: {
      coinData: coinSlice,
    },
  });
  
