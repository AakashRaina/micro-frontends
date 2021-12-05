import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import ProgressBar from "./components/Progress";

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/AuthApp"));
const DashboardApp = React.lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setisSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setisSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <React.Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path='/auth'>
                <AuthApp onSignIn={() => setisSignedIn(true)} />
              </Route>
              <Route path='/dashboard' component={DashboardApp} />
              <Route path='/' component={MarketingApp} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
