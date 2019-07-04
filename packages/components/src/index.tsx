import React from 'react';
import { Platform } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper';

export const App = React.memo(() => (
  <PaperProvider>
    <React.Fragment>
      {Platform.OS === 'web' ? (
        <style type='text/css'>{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }
      `}</style>
      ) : null}
      <Title style={{ alignSelf: 'center' }}>New post is coming!! 🎉</Title>
      <Title style={{ alignSelf: 'center' }}>
        React, Typescript, Hooks, Redux and... CrossPlatform app's
      </Title>
    </React.Fragment>
  </PaperProvider>
));
