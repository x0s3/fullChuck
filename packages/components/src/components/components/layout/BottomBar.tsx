import React from 'react';
import { Image, View } from 'react-native';
import { CustomIcon } from '../shared/Icon';

export const BottomBar = React.memo(() => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <CustomIcon
      name={'format-list-bulleted'}
      callback={() => alert('open options')}
    />
    <Image
      style={{ height: 303 / 3, width: 295 / 3 }}
      source={{
        uri: `https://stickeroid.com/uploads/pic/full-pngimg/69311eaa3d0312a9e37dfbcb0a34d66bb3381e36.png`
      }}
    />
    <CustomIcon name={'share'} callback={() => alert('share joke')} />
  </View>
));
