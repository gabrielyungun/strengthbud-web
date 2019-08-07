import { Provider, connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components";
import React from "react";

import { LoginPage } from "./views/LoginPage";
import { theme } from "./constants";
import { WelcomePage } from "./views/WelcomePage";
import { AdminPage } from "./views/AdminPage";
import configureStore from "./store";
import history from "./utils/history";

import "./App.css";
import { UserStore } from "./store/controllers/User.store";

const store = configureStore();

function App({ props }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/admin" component={AdminPage} />
            <Route path="/" exact component={WelcomePage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

function PrivateRouteUI({ isLoggedIn, user, component, ...rest }) {
  return isLoggedIn ? (
    <Route
      component={componentProps => component({ user, ...componentProps })}
      {...rest}
    />
  ) : (
    <Redirect to="/login" />
  );
}
const PrivateRoute = connect(state => ({
  isLoggedIn: UserStore.selectors.isLoggedIn(state),
  user: UserStore.selectors.get(state)
}))(PrivateRouteUI);

export default App;
