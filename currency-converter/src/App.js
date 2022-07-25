import { BrowserRouter as Router } from "react-router-dom";
import React, { Fragment } from "react";

import Navbar from "./client/Navbar";
import NavRoutes from "./Routes";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Navbar />
          <NavRoutes />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
