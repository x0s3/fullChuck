import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
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
    <View style={{ alignItems: 'center', margin: 15 }}>
      <Title style={{ fontSize: 24 }}>{joke.value}</Title>
    </View>
  );
});
