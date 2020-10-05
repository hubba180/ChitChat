import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from "./components/App";
import rootReducer from "./reducers/index"
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
// import 'firebase/auth';

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
            <Router>
                <div>
                    <main>
                        <Route exact path="/" component={Home} />
                    </main>
                </div>
            </Router>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
)
