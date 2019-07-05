import React, { useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/actions/chuck.actions';
import { getJoke, isFetching } from '../redux/selectors';

export function ChuckJokes() {
  const joke = useSelector(getJoke);
  const isFetch = useSelector(isFetching);
  const dispatch = useDispatch();
  const fetchJoke = useCallback(
    () => dispatch(actions.fetchAsyncApi.request()),
    [dispatch]
  );

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text>
        Is fetching: {isFetch ? 'Im fetching a joke' : 'No no fetching a joke'}
      </Text>
      <Text>Joke: {joke.value}</Text>
      <Button onPress={fetchJoke}>FETCH ANOTHER JOKE</Button>
    </SafeAreaView>
  );
}
