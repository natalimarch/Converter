import { createAction } from "@reduxjs/toolkit";

const getRatesRequest = createAction("rates/getRequest");
const getRatesSuccess = createAction("rates/getSuccess");
const getRatesError = createAction("rates/getError");

export default {
  getRatesRequest,
  getRatesSuccess,
  getRatesError,
};
