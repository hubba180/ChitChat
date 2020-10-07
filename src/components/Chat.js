import React from 'react';
import { useFirestore } from 'react-redux-firebase';
// import Message from './Message';

//shows information from chat with another participent and includes input and send button functionality

function Chat(props) {
  const firestore = useFirestore();

  return (firestore.collection(`${props.chatName}`)
    .get()
    .then(function(query) {
      let messageArray = []
      query.docs.forEach(function(doc) {
        const item = doc.data().description
        messageArray.push(item);
      });
      console.log(messageArray)
      return (
        <React.Fragment>
          <h1>This is the chat</h1>
          {
            messageArray.map((message, i) => {
              // return <Message description={message.description} />
            return <p key={i}>{message}</p>
            })
          }
        </React.Fragment>
      )
    }).catch(function(error) {
      console.log("catch tripped")
      console.log(error);
    }));

  // return (
  //   <React.Fragment>
  //     <h1>This is the chat</h1>
  //     {
  //       // myArray.map((message) => {
  //       //   // return <Message description={message.description} />
  //       // return <p>{message}</p>
  //       // })
  //     }
  //   </React.Fragment>
  // )
}

export default Chat

// firestore.collection(`${props.chatName}`)
        // .get()
        // .then(function(query) {
        //   query.forEach(function(doc) {
        //     const item = doc.data();
        //     const description = item.description.toString()
        //     return <p>{description}</p>
        //   });
        // }).catch(function(error) {
        //   console.log(error);
        // })