import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import firebase from "firebase/app";
import UtilityBar from "./UtilityBar";
import UtilityScreen from "./UtilityScreen";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";


class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      screenView: "home",
      chatName: null
    };
  }

  handleSwitchUtilityScreen = (screenSwitch, name) => {
    console.log(name.toString());
    console.log(screenSwitch);
    this.setState({
      ...this.state,
      screenView: screenSwitch,
      chatName: name.toString()
    })
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
          <Link to="/"><p>Go to sign in.</p></Link>
        </React.Fragment>
      )
    } 

    if ((isLoaded(auth)) && (auth.currentUser != null)) {

      const displayName = firebase.auth().currentUser.displayName;

      currentView = <React.Fragment>
      <UtilityScreen screenView={this.state.screenView} chatName={this.state.chatName}/>
      <Header name={displayName}/>
      <UtilityBar onSwitchUtilityScreen={this.handleSwitchUtilityScreen} />
    </React.Fragment>
    }

    return currentView;
  }
}

const mapStateToProps = (state) => {
  return {
    firestore: state.firestore
  }
}


SiteControl = connect(mapStateToProps)(SiteControl);
export default withFirestore(SiteControl);