import React, { useState, useEffect } from 'react';
import { useFirestore } from 'react-redux-firebase';
// import Message from './Message';

//shows information from chat with another participent and includes input and send button functionality


const Chat = (props) => {
  
  const firestore = useFirestore();

  const filteredArray = props.chat.filter((text) => text.type === "message")

  function handleFormSubmission(event) {
    event.preventDefault();
    return firestore.collection(`${props.chatName}`).add({
      type: "message",
      description: event.target.message.value,
      sender: `${props.currentUser}`
    })
  }

  return (
    <React.Fragment>
      <div class="text-chat">
        {filteredArray.map((message) => {
          console.log(message)
          return <p>{message.sender}: {message.description}</p>
        })}
      </div>
      <div class="input-block">
        <form onSubmit={handleFormSubmission}>
          <input type="text" name="message"></input>
          <button type="submit">Send</button>
        </form>
      </div>
    </React.Fragment>
  );

}

export default Chat
