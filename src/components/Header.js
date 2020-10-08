import React from 'react';
import firebase from "firebase/app";

function Header(props) {

  const doSignOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      //props.history.push("/home") maybe figure out how to return redirect, props history doesn't work
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h3 class="header-inline">Hello {props.name}!</h3>
      <button class="header-inline" variant="primary" onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  )
}

export default Header