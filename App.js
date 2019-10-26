/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import FlassScreen from './src/compoments/FlassScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <FlassScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
