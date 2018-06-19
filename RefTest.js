/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
//ref 回调属性
export default class RefTest extends Component {
    constructor(props){
        super(props);
        // 方式一：
        // this.state={
        //     size:80,
        // }
    }
    // 方式二：
    state={
        size:80,
    }
    getSize (){
        return this.state.size;
    }
    render() {
        return (
        <View style={styles.container}>
            <Text
                style={{fontSize:20}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size+10
                    })
                }}
            >
                点击： 变大
            </Text>
            <Image 
                style={{width:this.state.size, height:this.state.size}}
                source={require('./images/balloon.png')}
            />
            <Text
                style={{fontSize:20}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size-10
                    })
                }}
            >
                点击： 变小
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
