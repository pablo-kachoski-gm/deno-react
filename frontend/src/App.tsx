import React from "react";
import { Switch, Route } from "react-router-dom";
import AppDashboardPage from "./commons/pages/Dashboard";
import ProductsDashboardPage from "./products/pages/Dashboard";
import UsersDashboardPage from "./users/pages/Dashboard";
import PageNotFound from "./commons/pages/PageNotFound";

const App = () => {
  return (
    <Switch>
      <Route exact path="/products" component={ProductsDashboardPage} />
      <Route exact path="/users" component={UsersDashboardPage} />
      <Route exact path="/" component={AppDashboardPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default App;
