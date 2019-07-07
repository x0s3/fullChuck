import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { mainColors } from '../utils/theme';
import { BottomBar } from './components/layout/BottomBar';
import { Joke } from './components/layout/Joke';

export const MainView = () => (
  <SafeAreaView style={styles.rootView}>
    <Title children={'CHUCK FACTS'} style={[styles.title, { fontSize: 50 }]} />
    <Joke />
    <BottomBar />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: mainColors.blue,
    justifyContent: 'space-around'
  },
  title: {
    paddingTop: 25,
    alignSelf: 'center',
    textDecorationLine: 'underline'
  }
});
