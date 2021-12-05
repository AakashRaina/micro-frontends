import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import ProgressBar from "./components/Progress";

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/AuthApp"));
const DashboardApp = React.lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setisSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
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
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/' />}
                <DashboardApp />
              </Route>
              <Route path='/' component={MarketingApp} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
