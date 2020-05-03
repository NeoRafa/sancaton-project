import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default Main;
