import React from 'react';
import ContactList from './ContactList'

// needs to return the Contacts List component and Server List Component

function UtilityBar() {
  return (
    <React.Fragment>
      <ContactList />
      <h1>And I'm a Utility Bar!</h1>
    </React.Fragment>
  )
}

export default UtilityBar