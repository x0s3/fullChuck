import { Card, CardProps } from 'react-native-paper';

import { createAnimatedComponent } from './helpers';

export const AnimatedCard = createAnimatedComponent(Card);
(AnimatedCard as any).displayName = 'AnimatedCard';

export interface AnimatedCardProps extends CardProps {}
