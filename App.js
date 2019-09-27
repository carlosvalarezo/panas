/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import JavaActivity from './src/JavaActivity';

import {Navigation} from 'react-native-navigation';

const openRNView = props => {
  Navigation.push(props.componentId, {
    component: {
      name: 'navigation.Two',
    },
  });
};

const App = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello, world App!</Text>

      <Button title="Show React Native" onPress={() => openRNView(props)} />
      <Button
        title="Show Java"
        onPress={() => JavaActivity.openJavaActivity()}
      />
      <Button
        title="Show Java message"
        onPress={() =>
          JavaActivity.returnStringFromJava('Hola', result => {
            console.warn(result);
          })
        }
      />
    </View>
  );
};

export default App;
