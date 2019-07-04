import React from 'react';
import { Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { ChuckJokes } from './components';
import { configureStore } from './redux/store';

const store = configureStore();

export const App = React.memo(() => (
  <ReduxProvider store={store}>
    <PaperProvider>
      {Platform.OS === 'web' ? (
        <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }
      `}</style>
      ) : null}
      <ChuckJokes />
    </PaperProvider>
  </ReduxProvider>
));
