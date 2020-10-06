import React from 'react';
import Chat from './Chat';
import HomeFeed from './HomeFeed';

// returns either chat component or HomeFeed component

function UtilityScreen(props) {
  if (props.screenView === "chat") {
    console.log("chat")
    return (
    <React.Fragment>
      <Chat />
    </React.Fragment>);
  } else if (props.screenView === "home") {
    console.log("home")
    return (
    <React.Fragment>
      <HomeFeed />
    </React.Fragment>);
  } else console.log("Error on utility screen")
}

export default UtilityScreen