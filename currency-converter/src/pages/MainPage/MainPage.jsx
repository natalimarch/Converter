import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Spinner from "../../components/Spinner/Spinner";
import operations from "../../redux/operations";

import styles from "../../components/Converter/Converter.module.css";

const MainPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getAllRate()).then((data) => {
      setIsLoaded(true);
      return data;
    });
  }, [dispatch]);

  return (
    <div className={styles.Converter}>
      {isLoaded ? (
        <h1 className={styles.Title}>Try new Currency Convertor!</h1>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MainPage;
