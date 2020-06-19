import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";
import Contact from "./containers/Contact/Contact";
import Newborn from "./containers/Newborn/Newborn";
import CakeSmash from "./containers/CakeSmash/CakeSmash";

import "./App.scss";

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/newborn" component={Newborn} />
      <Route path="/cakesmash" component={CakeSmash} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
};

export default App;
