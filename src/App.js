import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Layout from "./@layouts/Layout";
import "./App.css";
import { Avatar } from "@components";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Avatar size={60} />
              </div>
            )}
          />
          <Layout>{/* <All app Modals /> */}</Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
