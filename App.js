/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {Navigation} from 'react-native-navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.openRNView = this.openRNView.bind(this);
  }

  openRNView() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.Two',
      },
    });
  }

  openJavaView() {
    console.warn('opens java activity');

    //        Navigation.push(this.props.componentId, {
    //              component: {
    //                name: 'navigation.Two'
    //              }
    //            });
  }

  openKotlinView() {
    console.warn('opens Kotlin activity');

    //        Navigation.push(this.props.componentId, {
    //              component: {
    //                name: 'navigation.Two'
    //              }
    //            });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, world App!</Text>
        <Button title="Show React Native" onPress={this.openRNView} />
        <Button title="Show Java" onPress={this.openJavaView} />
        <Button title="Show Kotlin" onPress={this.openKotlinView} />
      </View>
    );
  }
}
