import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/Home/index";
import FormArea from "./pages/form";
import Portfolio from "./pages//Portfolio/index";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={FormArea} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
