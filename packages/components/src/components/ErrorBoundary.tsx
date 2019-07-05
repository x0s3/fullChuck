import React, { Component, ErrorInfo } from 'react';
import { Image, View } from 'react-native';
import { Title } from 'react-native-paper';

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
        <View style={{ alignItems: 'center' }}>
          <Title>Oops seems like something went wrong...</Title>
          <Image
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
