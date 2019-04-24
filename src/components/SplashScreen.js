import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { View } from 'react-native';

import { Button, Card, CardSection, Header, Spinner, CatsList} from './common';
import firebase from 'firebase';

class SplashScreen extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAktaqx7u4-opdyUpSDZxYTAVH9S0MEDM0",
      authDomain: "auth-d389a.firebaseapp.com",
      databaseURL: "https://auth-d389a.firebaseio.com",
      projectId: "auth-d389a",
      storageBucket: "auth-d389a.appspot.com",
      messagingSenderId: "198682215862"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Card>
              <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                  Log Out
                </Button>
              </CardSection>
              <CatsList />
            </Card>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
} 

export default SplashScreen;