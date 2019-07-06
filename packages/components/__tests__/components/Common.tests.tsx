import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { CustomIcon } from '../../src/components/components/common/Icon';

describe('COMMON COMPONENTS', () => {
  it('should mount correctly icon', () => {
    renderer.create(<CustomIcon name={'share'} />);
  });
});
