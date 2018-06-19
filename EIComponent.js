/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var name='小明';
const age='22';
export {name,age}//导出变量、常量

export default class EIComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>EIComponent组件</Text>
      </View>
    );
  }
}

export function sum(a,b){
    return a+b;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
