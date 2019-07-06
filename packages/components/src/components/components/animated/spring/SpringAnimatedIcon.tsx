import { TouchableOpacity, TouchableOpacityProperties } from 'react-native';

import { createSpringAnimatedComponent } from './helpers';

export const SpringAnimatedIcon = createSpringAnimatedComponent(
  TouchableOpacity
);
(SpringAnimatedIcon as any).displayName = 'SpringAnimatedIcon';

export interface SpringAnimatedIconProps extends TouchableOpacityProperties {}
