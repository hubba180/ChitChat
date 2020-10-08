import firebase from "firebase/app";
import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { withFirestore, useFirestore } from 'react-redux-firebase';

function SignIn(props) {
  const firestore = useFirestore();

  const [ viewSwitch, setViewSwitch ] = useState(true);
  const [ buttonText, setButtonText] = useState("Or, Sign Up!")

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.displayName.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      let user = firebase.auth().currentUser;
      firestore.collection('allUsers').add({
        userId: firebase.auth().currentUser.uid,
        userName: displayName,
        userEmail: email,
        online: true
      })
      if (user != null) {
        user.updateProfile({
          displayName: displayName
        })
      }
      console.log("successfully signed up!");
      props.history.push("/home")
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      props.history.push("/home")
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  const [ signInView, setSignInView ] = useState(
    <React.Fragment>
      <img src="https://img.icons8.com/dotty/80/000000/radio.png"/><p>Welcome to ChitChat</p>
      <h1 class="sign-in-header">Sign In</h1><br />
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='Email' /><br />
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' /><br />
          <button type='submit' variant="primary">Sign in</button>
        </form>
    </React.Fragment>
  )

  const doSwitchView = () => {
    if (viewSwitch === true) {
      setSignInView(
        <React.Fragment>
          <img src="https://img.icons8.com/dotty/80/000000/radio.png"/><p>Welcome to ChitChat</p>
          <h1 class="sign-in-header">Sign up</h1><br />
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='Email' /><br />
              <input
              type='text'
              name='displayName'
              placeholder='Name' /><br />
            <input
              type='password'
              name='password'
              placeholder='Password' /><br />
            <button type='submit' variant="primary">Sign up</button>
          </form>
        </React.Fragment>)
        setViewSwitch(false)
        setButtonText("Go Back")
    } else {
      setSignInView(
        <React.Fragment>
          <img src="https://img.icons8.com/dotty/80/000000/radio.png"/><p>Welcome to ChitChat</p>
      <h1 class="sign-in-header">Sign In</h1><br />
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='Email' /><br />
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' /><br />
          <button type='submit' variant="primary">Sign in</button>
        </form>
      </React.Fragment>)
      setViewSwitch(true)
      setButtonText("Or, Sign Up!")
    }
  }

  return (
      <React.Fragment>
        <div class="sign-in">
          {signInView}
          <button type='button' variant="primary" onClick={doSwitchView}>{buttonText}</button>
        </div>
      </React.Fragment>
    )
}

SignIn = withFirestore(SignIn);
export default withRouter(SignIn)
