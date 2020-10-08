// loops through all contact components
import React from 'react';
import Contact from './Contact';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';


function ContactList(props) {
  useFirestoreConnect([
    { collection: 'allUsers' }
  ])

  

    const allUsers = useSelector(state => state.firestore.ordered.allUsers)
    if (isLoaded(allUsers)) {
      return (<React.Fragment>
        <h3>Contacts</h3>
        {allUsers.filter(user => user.userName !== props.currentUser).map((user) => {
            return <Contact onSwitchUtilityScreen={props.onSwitchUtilityScreen} name={user.userName} userId={user.userId}/>
          })}
      </React.Fragment>);
    } else {
      return (
        <React.Fragment>
          <h3>Loading...</h3>
        </React.Fragment>
      )
    }


}

export default ContactList