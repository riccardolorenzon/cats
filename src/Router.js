import React from 'react';
import { Scene, Router, Actions, Stack} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
        <Scene key="auth" component={LoginForm} title="Login">
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;