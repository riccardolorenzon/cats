import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { View } from 'react-native';

import { Button, Card, CardSection, Header, Spinner, CatsList} from './common';
import { connect } from 'react-redux';

import { logoutUser, checkUserToken } from '../actions';
class SplashScreen extends Component {
  componentWillMount() {
    this.props.checkUserToken();
  }

  onButtonPress() {
    this.props.logoutUser();
  }


  renderContent() {
    switch (this.props.user !== null) {
      case true:
        return (
          <View>
            <Card>
              <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
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

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(mapStateToProps, {
  logoutUser, checkUserToken
})(SplashScreen);