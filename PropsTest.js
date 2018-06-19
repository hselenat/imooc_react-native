/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// React Native - 使用prop-types进行属性确认（必要属性验证、类型验证）:
// http://www.hangge.com/blog/cache/detail_1743.html
//命令：npm install --save prop-types

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PropsTest extends Component {
    // 若本组件的属性，上一个页面无法提供，则可以定义一个默认属性
    static defaultProps = {
        name: '小红',//默认调用上一个页面的属性
        age: 20,
        sex: '女'
    }

    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number,
        sex: PropTypes.string.isRequired,//性别是必须被指定
    }
    render() {
        return (
        <View style={styles.container}>
            {/* name属性由上个页面传递过来（也只能由上一个页面传递） */}
            <Text>PropsTest:
                名字：{this.props.name},
                年龄:{this.props.age},
                性别:{this.props.sex}
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
