import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import UtilityBar from "./UtilityBar";
import UtilityScreen from "./UtilityScreen";
import { withFirestore, isLoaded } from 'react-redux-firebase';
// import PropTypes from "prop-types";

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
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
          <h1>You must sign in.</h1>
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


SiteControl = connect()(SiteControl);
export default withFirestore(SiteControl);