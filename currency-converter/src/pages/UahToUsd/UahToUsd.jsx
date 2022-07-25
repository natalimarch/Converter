import { useSelector } from "react-redux";
import { useState } from "react";

import Converter from "../../components/Converter/Converter";

import { getAllRates } from "../../redux/selectors";

import styles from "../../components/Converter/Converter.module.css";

const UahtoUsd = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  const rate = useSelector(getAllRates);

  const onPress = () => {
    if (!value) {
      setValue("");
    }
  };

  const calculateAmount = () => {
    setResult(parseFloat(value) * parseFloat(rate.rates.usd));
  };

  const calculateOnEnter = (e) => {
    if (e.code === "Enter") {
      setResult(parseFloat(value) * parseFloat(rate.rates.usd));
    }
  };

  const changeValue = (value) => {
    setValue(value);
  };

  return (
    <div className={styles.Converter}>
      <h1 className={styles.Title}>Convert UAH to USD</h1>
      <Converter
        value={value}
        changeValue={changeValue}
        calculateAmount={calculateAmount}
        calculateOnEnter={calculateOnEnter}
        onPress={onPress}
      />
      <div className={styles.Equal}>=</div>
      <div className={styles.Converted}>{result.toFixed(2) + " USD"}</div>
      <div className={styles.Rate}>
        1 UAH = {parseFloat(rate.rates.usd)} USD
      </div>
    </div>
  );
};

export default UahtoUsd;
