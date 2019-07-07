import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/chuck.actions';
import { getJoke } from '../../../redux/selectors';

export const Joke = React.memo(() => {
  const joke = useSelector(getJoke);
  const dispatch = useDispatch();
  const fetchJoke = useCallback(
    () => dispatch(actions.fetchAsyncApi.request()),
    [dispatch]
  );

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <View style={styles.view}>
      <Title style={styles.text} children={joke.value} />
    </View>
  );
});

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    margin: 15
  },
  text: {
    fontSize: 24
  }
});
