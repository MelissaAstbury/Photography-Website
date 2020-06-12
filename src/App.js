import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";

import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aboutme" component={AboutMe} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </BrowserRouter>
  );
};

export default App;
