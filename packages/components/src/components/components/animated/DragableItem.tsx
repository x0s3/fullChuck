import React, { useLayoutEffect, useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

interface IDragableItem {
  children: React.ReactElement;
  rangeX?: number;
  rangeY?: number;
  callback?: () => void;
}

export function DraggableItem({
  children,
  callback,
  rangeX = 100,
  rangeY = 100
}: IDragableItem) {
  const animatedValue = useRef(new Animated.ValueXY());
  const value = useRef({ x: 0, y: 0 });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: _ => true,
      onMoveShouldSetPanResponder: _ => true,
      onPanResponderGrant: _ => {
        animatedValue.current.setOffset({
          x: value.current.x,
          y: value.current.y
        });
        animatedValue.current.setValue({ x: 0, y: 0 });
      },
      onPanResponderEnd: callback,
      onPanResponderMove: (e, gestureState) =>
        Math.abs(gestureState.dx) > rangeX || Math.abs(gestureState.dy) > rangeY
          ? null
          : Animated.event([
              null,
              { dx: animatedValue.current.x, dy: animatedValue.current.y }
            ])(e, gestureState),
      onPanResponderRelease: _ => {
        animatedValue.current.flattenOffset();

        Animated.spring(animatedValue.current, {
          toValue: { x: 0, y: 0 }
        }).start();
      }
    })
  );

  useLayoutEffect(() => {
    animatedValue.current.addListener(val => (value.current = val));
  }, []);

  return (
    <Animated.View
      style={{ transform: animatedValue.current.getTranslateTransform() }}
      {...panResponder.current.panHandlers}
    >
      {children}
    </Animated.View>
  );
}
