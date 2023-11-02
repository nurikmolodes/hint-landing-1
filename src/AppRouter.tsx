import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "src/utils/routes";
import { PersonalizedHoroscope } from "./utils/constants";
import PageTransition from "./Pages/PageTransition";

const AppRouter = () => {
  return (
    <PageTransition>
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact={true} />
        ))}
        <Redirect to={PersonalizedHoroscope} />
      </Switch>
    </PageTransition>
  );
};

export default AppRouter;
