import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ICustomIcon {
  name: string;
  size?: number;
  color?: string;
  callback?: () => void;
}

export const CustomIcon = React.memo(
  ({ name, size = 50, color = '#FFF', callback }: ICustomIcon) => (
    <TouchableOpacity
      onPress={callback}
      children={<Icon name={name} size={size} color={color} />}
    />
  )
);
