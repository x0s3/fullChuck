import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ICustomIcon {
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

export const CustomIcon = React.memo(
  ({ name, size = 50, color = '#FFF', style = {} }: ICustomIcon) => (
    <Icon style={style} name={name} size={size} color={color} />
  )
);
