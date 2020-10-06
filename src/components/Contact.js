// props have name and user id = turn into buttons that create a user chat
import React from 'react';
import firebase from "firebase/app";
import { useFirestore } from 'react-redux-firebase';

function Contact(props) {
  const firestore = useFirestore()

  doCreateChat = (id) => {
    const user = firebase.auth().currentUser
    firestore.collection(`${user.uid}-${id}`).add();
  }

  return (
    <React.Fragment>
      <div onClick={() => doCreateChat(props.userId)}>
        <p>{props.name}</p>
      </div>
    </React.Fragment>
  )
}

export default Contact