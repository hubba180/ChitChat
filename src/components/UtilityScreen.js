import React from 'react';
import Chat from './Chat';
import HomeFeed from './HomeFeed';


// returns either chat component or HomeFeed component


function UtilityScreen(props) {
  if (props.screenView === "chat") {
    return (
    <React.Fragment>
      <Chat chat={props.chat} chatName={props.chatName} currentUser={props.currentUser}/>
    </React.Fragment>);
  } else if (props.screenView === "home") {
    return (
    <React.Fragment>
      <HomeFeed />
    </React.Fragment>);
  } else console.log("Error on utility screen")
}

export default UtilityScreen