/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import JavaActivity from './src/JavaActivity';
import Login from './src/Login';
import Friends from './src/Friends';

import {Navigation} from 'react-native-navigation';

const openRNView = props => {
  Navigation.push(props.componentId, {
    component: {
      name: 'navigation.Two',
    },
  });
};

const App = props => {
  const [text, setText] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card title="Enter text!">
        <Input
          placeholder="enter your phone number"
          onChangeText={value => setText(value)}
          value={text}
        />
        <Button
          title="Show text"
          onPress={() =>
            Login.invokeFirebaseFunction(text, result => {
              console.warn(result);
            })
          }
        />
        <Button
          title="Get friends"
          onPress={() =>
            Friends.getFriends(result => {
              console.warn(result);
            })
          }
        />
      </Card>

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
