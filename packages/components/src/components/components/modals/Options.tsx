import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  useCallback
} from 'react';
import { Animated, Dimensions, Easing } from 'react-native';
import {
  Button,
  Card,
  Modal,
  Paragraph,
  Portal,
  Title
} from 'react-native-paper';
import { AnimatedCard } from '../animated/AnimatedCard';

function OptionsModal(props: any, ref: any) {
  const roundAnimation = useRef(new Animated.Value(200));
  const scaleText = useRef(new Animated.Value(0));
  const sizeAnimation = useRef(
    new Animated.Value(Dimensions.get('window').width * 0.5)
  );
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setVisible(true)
  }));

  useLayoutEffect(() => {
    if (visible) startAnimation();
  });

  const startAnimation = useCallback(() => {
    Animated.parallel([
      Animated.timing(roundAnimation.current, {
        toValue: 0,
        duration: 750,
        easing: Easing.ease
      }),
      Animated.timing(sizeAnimation.current, {
        toValue: Dimensions.get('window').width / 2,
        duration: 750,
        easing: Easing.ease
      }),
      Animated.timing(scaleText.current, {
        toValue: 1,
        duration: 750,
        easing: Easing.ease
      })
    ]).start();
  }, [roundAnimation.current, scaleText.current, sizeAnimation.current]);

  const dismissModal = () =>
    Animated.parallel([
      Animated.timing(roundAnimation.current, {
        toValue: 1,
        duration: 750,
        easing: Easing.ease
      }),
      Animated.timing(sizeAnimation.current, {
        toValue: Dimensions.get('window').width * 0.5,
        duration: 750,
        easing: Easing.ease
      }),
      Animated.timing(scaleText.current, {
        toValue: 0,
        duration: 750,
        easing: Easing.ease
      })
    ]).start(() => setVisible(false));

  const scaleText2 = scaleText.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5]
  });

  return (
    <Portal>
      <Modal visible={visible} onDismiss={dismissModal}>
        <AnimatedCard
          style={{
            transform: [{ scale: scaleText2 }],
            alignSelf: 'center',
            borderRadius: roundAnimation.current,
            width: sizeAnimation.current,
            height: sizeAnimation.current
          }}
        >
          <Card.Title title='Card Title' subtitle='Card Subtitle' />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Button onPress={dismissModal}>jeje</Button>
        </AnimatedCard>
      </Modal>
    </Portal>
  );
}

export default forwardRef(OptionsModal);
