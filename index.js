/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Navigation} from 'react-native-navigation';
import Two from './src/Two';

// AppRegistry.registerComponent(appName, () => App);

Navigation.registerComponent('navigation.App', () => App);
Navigation.registerComponent('navigation.Two', () => Two);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'stack',
        children: [
          {
            component: {
              name: 'navigation.App',
            },
          },
        ],
      },
    },
  });
});
