import React, { useState, useEffect } from 'react';
import { useFirestore } from 'react-redux-firebase';
// import Message from './Message';

//shows information from chat with another participent and includes input and send button functionality

function useMessages(dbTable) {
  const firestore = useFirestore();
  const [messages, setMessages] = useState([])
  useEffect(() => {
    firestore.collection(`${dbTable}`)
      .onSnapshot((snapshot) => {
        const newMessages = snapshot.docs.map((doc) => ({
          description: doc.data().description,
          type: doc.data().type
        }))

        setMessages(newMessages);
      })
  }, [])

  return messages
}




const Chat = (props) => {
  // const firestore = useFirestore();
  const conversation = useMessages(props.chatName);
  console.log(conversation);
  

  return (
    <React.Fragment>
      {conversation.map((convo) => {
        return <p>{convo.description}</p>
      })}
    </React.Fragment>
  )



  // return (firestore.collection(`${props.chatName}`)
  //   .get()
  //   .then(function(query) {
  //     let messageArray = []
  //     query.docs.forEach(function(doc) {
  //       const item = doc.data().description
  //       messageArray.push(item);
  //     });
  //     console.log(messageArray)
  //     return (
  //       <React.Fragment>
  //         <h1>This is the chat</h1>
  //         {
  //           messageArray.map((message, i) => {
  //             // return <Message description={message.description} />
  //           return <p key={i}>{message}</p>
  //           })
  //         }
  //       </React.Fragment>
  //     )
  //   }).catch(function(error) {
  //     console.log("catch tripped")
  //     console.log(error);
  //   }));

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