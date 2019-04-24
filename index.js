/**
 * @format
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import RouterComponent from './src/Router';

// Create a component
const App = () => (
  <RouterComponent />
);

// Render it to the device
AppRegistry.registerComponent('cats', () => App);
