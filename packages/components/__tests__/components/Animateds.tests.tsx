import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { DraggableItem } from '../../src/components/components/animated/DragableItem';
import { SpringAnimatedIcon } from '../../src/components/components/animated/spring/SpringAnimatedIcon';
import { SpringAnimatedImage } from '../../src/components/components/animated/spring/SpringAnimatedImage';
import { SpringAnimatedText } from '../../src/components/components/animated/spring/SpringAnimatedText';
import { SpringAnimatedView } from '../../src/components/components/animated/spring/SpringAnimatedView';

describe('ANIMATED COMPONENTS', () => {
  it('should mount correctly draggable item', () => {
    renderer.create(<DraggableItem children={null} />);
  });

  it('should mount correctly animated image', () => {
    renderer.create(<SpringAnimatedImage source={{ uri: '' }} />);
  });

  it('should mount correctly animated text', () => {
    renderer.create(<SpringAnimatedText children={'Testing'} />);
  });

  it('should mount correctly animated icon', () => {
    renderer.create(<SpringAnimatedIcon name={''} />);
  });

  it('should mount correctly animated view', () => {
    renderer.create(<SpringAnimatedView children={null} />);
  });
});
