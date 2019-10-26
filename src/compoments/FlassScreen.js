import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default class FlassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: 'Wellcome Coffee Thao Mai',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/Logo.png')} style={styles.pic} />
        <Text style={styles.txt1}>{this.state.titleText}</Text>
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
  pic: {
    width: 150,
    height: 150,
    marginTop: 700,
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2a702d',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
