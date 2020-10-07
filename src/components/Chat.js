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
  const [currentChat, setCurrentChat ] = useState(props.chatName);
  const conversation = useMessages(props.chatName);

  // useEffect(() => {
  //   setCurrentChat(props.chatName)
  // }, [currentChat])
  
  return (
    <React.Fragment>
      {conversation.map((convo) => {
        return <p>{convo.description}</p>
      })}
    </React.Fragment>
  );
}

export default Chat
