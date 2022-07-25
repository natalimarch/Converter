import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import actions from "./actions";

const ratesReducer = createReducer([], {
  [actions.getRatesSuccess]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [actions.getRatesRequest]: () => true,
  [actions.getRatesSuccess]: () => false,
  [actions.getRatesError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.getRatesSuccess]: () => null,
  [actions.getRatesError]: (_, { payload }) => payload,
});

const rates = combineReducers({
  rates: ratesReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rates;
