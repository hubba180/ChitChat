import React from 'react';
import firebase from "firebase/app";
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

//shows information from chat with another participent and includes input and send button functionality

function Chat(props) {
  // const currentUser = firebase.auth().currentUser
  // useFirestoreConnect([
  //   { collection: `${props.chatIdValue}`}]);
  // let conversation = null;
  // const variable = useSelector(state => state.firestore.ordered.);

  // const chatCollection = useSelector(state => state.firestore.ordered[variable])

  // console.log(chatCollection);
  
  return (
    <React.Fragment>
      <h1>This is the chat</h1>
    </React.Fragment>
  )
}

export default Chat