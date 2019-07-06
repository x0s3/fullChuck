import { DefaultTheme, Theme } from 'react-native-paper';

export const mainColors = {
  blue: '#0D47A1'
};

export const mainTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#FFFFFF',
    primary: '#FFFFFF'
  }
};
