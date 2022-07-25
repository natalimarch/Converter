import styles from "./Converter.module.css";

const Converter = ({
  value,
  changeValue,
  calculateAmount,
  calculateOnEnter,
  onPress,
}) => {
  const handleChange = ({ target }) => {
    changeValue(parseFloat(target.value));
  };

  return (
    <div>
      <input
        className={styles.Input}
        type="number"
        onChange={handleChange}
        onKeyDown={onPress}
        value={value}
        onKeyPress={calculateOnEnter}
      />
      <button className={styles.Btn} onClick={calculateAmount}>
        Рассчитать
      </button>
    </div>
  );
};

export default Converter;
