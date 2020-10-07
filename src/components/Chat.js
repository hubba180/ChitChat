import React from 'react';
import firebase from "firebase/app";
import { useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Message from './Message';

//shows information from chat with another participent and includes input and send button functionality

function Chat(props) {
  const firestore = useFirestore();

  let messageArray = [];

  firestore.collection(`${props.chatName}`)
    .get()
    .then(function(query) {
      query.forEach(function(doc) {
        const item = doc.data()
        console.log(item)
        console.log(JSON.parse(item.description))
        messageArray.push(item);
      });
    }).catch(function(error) {
      console.log(error);
    });

  return (
    <React.Fragment>
      <h1>This is the chat</h1>
      {
        // firestore.collection(`${props.chatName}`)
        // .get()
        // .then(function(query) {
        //   query.forEach(function(doc) {
        //     const item = JSON.parse(doc.data());
        //     console.log(item);
        //     return <p>{item.description}</p>
        //   });
        // }).catch(function(error) {
        //   console.log(error);
        // })

        messageArray.map((message) => {
          // return <Message description={message.description} />
          const item = JSON.parse(message)
        return <p>{item.description}</p>
        })
      }
    </React.Fragment>
  )
}

export default Chat