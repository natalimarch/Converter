import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import UahToUsd from "./pages/UahToUsd";
import UahToEur from "./pages/UahToEur";
import UahToPln from "./pages/UahToPln";

const NavRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route exact path="/uah-usd" element={<UahToUsd />}></Route>
      <Route exact path="/uah-eur" element={<UahToEur />}></Route>
      <Route exact path="/uah-pln" element={<UahToPln />}></Route>
    </Routes>
  );
};

export default NavRoutes;
