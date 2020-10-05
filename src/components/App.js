import React from 'react';
import SiteControl from './SiteControl';
import Signin from "./SignIn";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
          <Route path="/SignIn">
            <Signin />
          </Route>
            <Route path="/">
              <SiteControl />
            </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;