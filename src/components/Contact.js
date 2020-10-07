// props have name and user id = turn into buttons that create a user chat
import React from 'react';
import firebase from "firebase/app";
import { useFirestore } from 'react-redux-firebase';

function Contact(props) {
  const firestore = useFirestore()

  const doCreateChat = (id) => {
    const user = firebase.auth().currentUser
    const userVar = [`${user.displayName}`, `${props.name}`]
    const dataName = userVar.sort()
    firestore.collection(`${dataName}`).add({
      type: "initial",
      description: `${user.displayName} started the chat with ${props.name}`
    });
    props.onSwitchUtilityScreen("chat", dataName);
    // props.onChangeChatId(id);
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