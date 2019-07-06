import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { MainView } from './components';
import ErrorBoundary from './components/components/layout/ErrorBoundary';
import { configureStore } from './redux/store';
import { mainColors, mainTheme } from './utils/theme';

const store = configureStore();

export const App = () => (
  <ErrorBoundary>
    <StatusBar backgroundColor={mainColors.blue} translucent />
    <ReduxProvider store={store}>
      <PaperProvider theme={mainTheme}>
        {Platform.OS === 'web' ? (
          <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }
      `}</style>
        ) : null}
        <MainView />
      </PaperProvider>
    </ReduxProvider>
  </ErrorBoundary>
);
