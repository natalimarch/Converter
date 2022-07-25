import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.exchangerate.host/convert",
});

export const getRates = async (currency) => {
  const response = await instance.get(`/?from=UAH&to=${currency}`);
  const { info } = response.data;

  return info.rate;
};

export const getAllRates = async () => {
  return {
    usd: await getRates("USD"),
    eur: await getRates("EUR"),
    pln: await getRates("PLN"),
  };
};
