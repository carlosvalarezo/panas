/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import styles from './src/styles';
import {Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';

const openRNView = props => {
  Navigation.push(props.componentId, {
    component: {
      name: 'navigation.Two',
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
  return (
    <View style={styles.loginFormView}>
      <Text style={styles.logoText}>panas</Text>
      <TextInput
        placeholder="usuario"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />
      <TextInput
        placeholder="clave"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
      />
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => openRNView(props)}
        title="entrar"
      />
    </View>
  );
};

export default App;
