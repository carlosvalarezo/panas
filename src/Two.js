import React, {useState} from 'react';
import {View} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import JavaActivity from './JavaActivity';
import Login from './Login';
import Panas from './Panas';

import {Navigation} from 'react-native-navigation';

const openProfile = props => {
  Navigation.push(props.componentId, {
    component: {
      name: 'navigation.Profile',
      options: {
        topBar: {
          visible: false,
          height: 0,
        },
      },
    },
  });
};

const App = props => {
  const [text, setText] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card title="Enter text!">
        <Input
          placeholder="enter your phone number"
          onChangeText={value => setText(value)}
          value={text}
        />

        <Button
          title="Show text"
          onPress={() =>
            Login.invokeFirebaseFunction(text, result => {
              console.warn(result);
            })
          }
        />

        <Button
          title="Get panas"
          onPress={() =>
            Panas.getPanas(result => {
              console.warn(result);
            })
          }
        />

        <Button
          // buttonStyle={styles.loginButton}
          onPress={() => openProfile(props)}
          title="open profile"
        />
      </Card>

      <Button
        title="Show Java"
        onPress={() => JavaActivity.openJavaActivity()}
      />

      <Button
        title="Show Java message"
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
