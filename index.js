/**
 * @format
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import CatsList from './src/components/CatsList';
import RouterComponent from './src/Router';
import Header from './src/components/Header';

// Create a component
const App = () => (
  <RouterComponent />
);

// Render it to the device
AppRegistry.registerComponent('cats', () => App);
