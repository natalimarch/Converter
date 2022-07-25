import Converter from "../../components/Converter/Converter";
import styles from "../../components/Converter/Converter.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getAllRates } from "../../redux/selectors";

const UahtoPln = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const rate = useSelector(getAllRates);

  const onPress = () => {
    if (!value) {
      setValue("");
    }
  };

  const calculateAmount = () => {
    setResult(parseFloat(value) * parseFloat(rate.rates.eur));
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
      <h1 className={styles.Title}>Convert UAH to PLN</h1>
      <Converter
        value={value}
        changeValue={changeValue}
        calculateAmount={calculateAmount}
        calculateOnEnter={calculateOnEnter}
        onPress={onPress}
      />
      <div className={styles.Equal}>=</div>
      <div className={styles.Converted}>{result.toFixed(2) + " PLN"}</div>
      <div className={styles.Rate}>
        1 UAH = {parseFloat(rate.rates.pln)} PLN
      </div>
    </div>
  );
};

export default UahtoPln;
