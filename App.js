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

import {Navigation} from 'react-native-navigation';

const openRNView = props => {
  Navigation.push(props.componentId, {
    component: {
      name: 'navigation.Two',
    },
  });
};

const App = props => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card title="Login with phone to panas!">
        <Input
          placeholder="enter your phone number"
          onChangeText={value => setPhoneNumber(value)}
          value={phoneNumber}
        />
        <Button
          title="Show phoneNumber"
          onPress={() => console.warn(phoneNumber)}
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
