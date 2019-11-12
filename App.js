/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';

import styles from './src/styles';
import {Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';

const axios = require('axios').default;

const login = (props, username, password) => {
  axios
    .post('https://us-central1-panas-274ee.cloudfunctions.net/panasLogin', {
      username,
      password,
    })
    .then(function(response) {
      const {data} = response;
      const {message} = data;
      if (message) {
        openRNView(props);
      }
    })
    .catch(function(error) {
      console.warn(error);
    });
};

const openRNView = props => {
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.loginFormView}>
      <Text style={styles.logoText}>panas</Text>
      <TextInput
        placeholder="usuario"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        onChangeText={value => setUsername(value)}
        value={username}
      />
      <TextInput
        placeholder="clave"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
        value={password}
      />
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => login(props, username, password)}
        title="entrar"
      />
    </View>
  );
};

export default App;
