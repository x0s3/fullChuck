import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/chuck.actions';
import { getJoke, isFetching } from '../../../redux/selectors';

export const Joke = React.memo(() => {
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
    <View style={{ alignItems: 'center', margin: 15 }}>
      {/* <Text>
        Is fetching: {isFetch ? 'Im fetching a joke' : 'Im not fetching a joke'}
      </Text> */}
      <Title style={{ fontSize: 24 }}>{joke.value}</Title>
      <Button onPress={fetchJoke}>FETCH ANOTHER JOKE</Button>
    </View>
  );
});
