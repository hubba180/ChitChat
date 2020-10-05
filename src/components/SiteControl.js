import React from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import UtilityBar from "./UtilityBar";
import UtilityScreen from "./UtilityScreen";
import { withFirestore, isLoaded } from 'react-redux-firebase';
// import PropTypes from "prop-types";

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let currentView = null;
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <SignIn />
        </React.Fragment>
      )
    } 

    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      currentView = <React.Fragment>
      <UtilityScreen />
      <Header />
      <UtilityBar />
    </React.Fragment>
    }

    return currentView;
  }
}

export default withFirestore(SiteControl);