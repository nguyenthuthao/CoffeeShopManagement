import React, {Component} from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/Logo.png')} />
        <TextInput />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
