import React from 'react';
import { StyleProp, View } from 'react-native';
import { useSpring } from 'react-spring';
import { SpringAnimatedIcon } from '../animated/spring/SpringAnimatedIcon';
import { SpringAnimatedImage } from '../animated/spring/SpringAnimatedImage';
import { CustomIcon } from '../common/Icon';

export const BottomBar = React.memo(() => {
  const fadeInProps: StyleProp<any> = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 750 }
  });

  const fadeTopProps: StyleProp<any> = useSpring({
    opacity: 1,
    bottom: 0,
    from: { bottom: -70, opacity: 0 },
    config: { duration: 750 }
  });

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <SpringAnimatedIcon
        style={fadeInProps}
        onPress={() => alert('open options')}
        children={<CustomIcon name={'format-list-bulleted'} />}
      />
      <SpringAnimatedImage
        style={[fadeTopProps, { height: 303 / 3, width: 295 / 3 }]}
        source={{
          uri: `https://stickeroid.com/uploads/pic/full-pngimg/69311eaa3d0312a9e37dfbcb0a34d66bb3381e36.png`
        }}
      />
      <SpringAnimatedIcon
        style={fadeInProps}
        onPress={() => alert('open options')}
        children={<CustomIcon name={'share'} />}
      />
    </View>
  );
});
