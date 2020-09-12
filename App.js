/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import ImageListScreen from './src/components/ImageListScreen.js';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ImageListScreen />
        </SafeAreaView>
      </>
    );
  }
}

export default App;
