/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import App from './App';
import Two from './src/Two';

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
              options: {
                topBar: {
                  visible: false,
                  height: 0,
                },
              },
            },
          },
        ],
      },
    },
  });
});
