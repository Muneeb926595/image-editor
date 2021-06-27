import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./@layouts/Layout";
import "./App.css";
import Login from "./@modules/Login/Login";
import Signup from "./@modules/Signup/Signup";
import AudioCall from "./@modules/AudioCall/AudioCall";
import VideoCall from "./@modules/VideoCall/VideoCall";
import Messenger from "./@modules/Messenger/Messenger";
import NotFoundPage from "./@modules/NotFountPage/NotFoundPage";
import Modals from "./@modules/Modals";
import StreamingProvider from "./@contextApi/StreamingProvider";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Suspense fallback={<div>Loading..</div>}>
        <ToastContainer />
        <StreamingProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Signup} />
              <Route exact path="/not-found" component={NotFoundPage} />

              <Layout>
                <Route exact path="/messenger" component={Messenger} />
                <Route exact path="/audio" component={AudioCall} />
                <Route exact path="/video" component={VideoCall} />
                <Modals />
              </Layout>
            </Switch>
          </Router>
        </StreamingProvider>
      </Suspense>
    </div>
  );
}

export default App;
