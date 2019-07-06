import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface ICustomIcon {
  name: string;
  size?: number;
  color?: string;
  style?: any;
  callback?: () => void;
}

export const CustomIcon = React.forwardRef(
  (
    { name, size = 50, color = '#FFF', style = {}, callback }: ICustomIcon,
    ref
  ) => (
    <Icon
      onPress={callback}
      style={style}
      name={name}
      size={size}
      color={color}
    />
  )
);
