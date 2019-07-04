import { ComponentType } from 'react';
import { AppRegistry } from 'react-native';

import { App } from 'components/src';

const render = (AppComponent: ComponentType) => {
  AppRegistry.registerComponent('fullChuck', () => AppComponent);
  AppRegistry.runApplication('fullChuck', {
    rootTag: document.querySelector('#root')
  });
};

render(App);
