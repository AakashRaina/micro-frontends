import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import AuthApp from "";
import Header from "./components/Header";

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <React.Suspense fallback={<div>Loading....</div>}>
            <Switch>
              <Route path='/auth' component={AuthApp} />
              <Route path='/' component={MarketingApp} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
