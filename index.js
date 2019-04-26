import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { AppRegistry } from 'react-native';
import RouterComponent from './src/Router';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAktaqx7u4-opdyUpSDZxYTAVH9S0MEDM0",
      authDomain: "auth-d389a.firebaseapp.com",
      databaseURL: "https://auth-d389a.firebaseio.com",
      projectId: "auth-d389a",
      storageBucket: "auth-d389a.appspot.com",
      messagingSenderId: "198682215862"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('cats', () => App);
