import React, { useState, useEffect } from 'react';
import { useFirestore } from 'react-redux-firebase';
// import Message from './Message';

//shows information from chat with another participent and includes input and send button functionality


const Chat = (props) => {

  if (props.chat) {
    const filteredArray = props.chat.filter((text) => text.type === "message")
    console.log(filteredArray)

  }

  return (
    <React.Fragment>
      {props.chat.map((message) => {
        return <p>{message.description}</p>
      })}
    </React.Fragment>
  );

}

export default Chat
