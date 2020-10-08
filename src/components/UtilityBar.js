import React from 'react';
import ContactList from './ContactList'

// needs to return the Contacts List component and Server List Component

function UtilityBar(props) {
  
  return (
    <React.Fragment>
      <div class="utility-bar">
        <ContactList onSwitchUtilityScreen={props.onSwitchUtilityScreen} />
      </div>
    </React.Fragment>
  )
}

export default UtilityBar