import React, { Component } from 'react';
import firebase from 'firebase';

import { Scene, Router, Actions, Stack} from 'react-native-router-flux';
import SplashScreen from './components/SplashScreen';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
        <Scene key="splash_screen" component={SplashScreen} title="Home">
        </Scene>
      </Stack>
    </Router>
 );
}

export default RouterComponent;