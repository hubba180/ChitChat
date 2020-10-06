import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from "./components/App";
import rootReducer from "./reducers/index"
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import 'firebase/auth';

import SignIn from "./components/SignIn";


const store = createStore(rootReducer);

const rrfProps = {
    firebase,
    config: {
        userProfile: "users",
        useFirestoreForProfile: true
    },
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Router >
                <Switch>
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                    <Route path="/home">
                        <App />
                    </Route>
                </Switch>
            </Router>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
)