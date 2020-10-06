import React from 'react';
import SiteControl from './SiteControl';
import SignIn from "./SignIn";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';

function App() {
  return (
    <React.Fragment>
      {/* <Router >
          <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
            <Route exact path="/">
              <SiteControl />
            </Route>
          </Switch>
      </Router> */}
      <SiteControl />
    </React.Fragment>
  );
}

export default App;