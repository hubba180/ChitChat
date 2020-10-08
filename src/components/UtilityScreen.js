import React from 'react';
import Chat from './Chat';
import HomeFeed from './HomeFeed';


// returns either chat component or HomeFeed component


function UtilityScreen(props) {
  if (props.screenView === "chat") {
    return (
    <React.Fragment>
      <div class="chat-div">
        <Chat chat={props.chat} chatName={props.chatName} currentUser={props.currentUser}/>
      </div>
    </React.Fragment>);
  } else if (props.screenView === "home") {
    return (
    <React.Fragment>
      <div class="homefeed-div">
        <HomeFeed />
      </div>
    </React.Fragment>);
  } else console.log("Error on utility screen")
}

export default UtilityScreen