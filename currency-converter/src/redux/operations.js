import { getRates, getAllRates } from "../services/services";
import actions from "./actions";

export const getRate = (currency) => {
  const actionFunc = async (dispatch) => {
    dispatch(actions.getRatesRequest());

    try {
      const data = await getRates(currency);
      dispatch(actions.getRatesSuccess(data));
      return data;
    } catch (error) {
      dispatch(actions.getRatesError(error));
    }
  };

  return actionFunc;
};

export const getAllRate = () => {
  const actionFunc = async (dispatch) => {
    dispatch(actions.getRatesRequest());

    try {
      const data = await getAllRates();
      dispatch(actions.getRatesSuccess(data));
      return data;
    } catch (error) {
      dispatch(actions.getRatesError(error));
    }
  };

  return actionFunc;
};

export default { getRate, getAllRate };
