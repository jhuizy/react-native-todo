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
import Todos from './application/components/Todos'

export default class Todo extends Component {
  render() {
    return (
      <Todos/>
    );
  }
}



AppRegistry.registerComponent('Todo', () => Todo);
