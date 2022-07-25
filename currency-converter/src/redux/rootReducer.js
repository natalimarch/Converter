import { combineReducers } from "redux";

import rates from "./reducers";

const rootReducer = combineReducers({
  rate: rates,
});

export default rootReducer;
