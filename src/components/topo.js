import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const logo = require('../../imgs/logo.png');

export default class Topo extends Component {
  render() {
    return (
        <View style={styles.topo}>
            <Image style={styles.imageTopo} source={logo}  />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    topo: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTopo: {
      flex: 1,
      width: 350,
      height: 50,
      resizeMode: 'contain'
    },    
  });

