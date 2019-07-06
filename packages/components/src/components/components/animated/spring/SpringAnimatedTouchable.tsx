import { CustomIcon, ICustomIcon } from '../../common/Icon';
import { createSpringAnimatedComponent } from './helpers';

export const SpringAnimatedIcon = createSpringAnimatedComponent(CustomIcon);
(SpringAnimatedIcon as any).displayName = 'SpringAnimatedIcon';

export interface SpringAnimatedIconProps extends ICustomIcon {}
