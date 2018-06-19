/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import RefTest from './RefTest'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state=({
      size:0,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
            style={{fontSize:20}}
            onPress={()=>{
                //方法一A
                // var size=this.refs.reftest.getSize();
                // 方法一B
                var size=this.refs['reftest'].getSize();
                //方法二
                // var size=this.reftest.getSize();
                this.setState({
                  size:size,
                })
            }}
        >
            获取气球大小：{this.state.size}
        </Text>
        <RefTest 
          // 方法一
          ref="reftest"
          // 方法二
          // ref={reftest=>this.reftest=reftest}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
