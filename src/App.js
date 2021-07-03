import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Layout from "./@layouts/Layout";
import "./App.css";
import Home from "@modules/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Layout>{/* <All app Modals /> */}</Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
