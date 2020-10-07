import React from 'react';

function Message(props) {
  return (
    <React.Fragment>
      <p>{props.description}</p>
    </React.Fragment>
  )
}

export default Message