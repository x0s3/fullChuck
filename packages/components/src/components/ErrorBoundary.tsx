import React, { Component, ErrorInfo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { mainColors } from '../utils/theme';

interface IProps {}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  static getDerivedStateFromError(error: ErrorInfo) {
    return { hasError: true };
  }

  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    if (__DEV__) console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={style.errorView}>
          <Title>Oops seems like something went wrong...</Title>
          <Image
            style={style.image}
            source={{
              uri: `https://files.sharenator.com/chuck_100_Chuck_Norris_Facts-s390x300-11888-420.jpg`
            }}
          />
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const style = StyleSheet.create({
  errorView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: mainColors.blue
  },
  image: { width: 300, height: 300 }
});
