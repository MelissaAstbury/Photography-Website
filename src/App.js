import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";
import Contact from "./containers/Contact/Contact";
import Newborn from "./containers/Newborn/Newborn";
import CakeSmash from "./containers/CakeSmash/CakeSmash";
import Occasions from "./containers/Occasions/Occasions";
import Family from "./containers/Family/Family";
import Maternity from "./containers/Maternity/Maternity";
import SplashFun from "./containers/SplashFun/SplashFun";

import "./App.scss";

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/newborn" component={Newborn} />
      <Route path="/cakesmash" component={CakeSmash} />
      <Route path="/occasions" component={Occasions} />
      <Route path="/family" component={Family} />
      <Route path="/maternity" component={Maternity} />
      <Route path="/splashFun" component={SplashFun} />
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
