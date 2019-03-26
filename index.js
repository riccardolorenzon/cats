/**
 * @format
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import CatsList from './src/components/CatsList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Cats'} />
    <CatsList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('cats', () => App);
