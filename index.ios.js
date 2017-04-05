/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import GamesList from './src/components/GamesList';

export default class livecodeapr3 extends Component {
  render() {
    return (
      <View>
        <Header />
        <GamesList />
      </View>
    );
  }
}



AppRegistry.registerComponent('livecodeapr3', () => livecodeapr3);
