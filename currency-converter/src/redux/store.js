import { configureStore } from "@reduxjs/toolkit";

import rates from "./reducers";

const store = configureStore({
  reducer: {
    rate: rates,
  },
});

export default store;
