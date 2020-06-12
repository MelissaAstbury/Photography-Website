import React from "react";

import Header from "./components/Header/Header";

import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Hello World!</h1>
      </div>
    </BrowserRouter>
  );
};

export default App;
