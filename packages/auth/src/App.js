import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

// import Landing from "./components/Landing";
// import Pricing from "./components/Pricing";

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch></Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};