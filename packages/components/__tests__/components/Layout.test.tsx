import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { BottomBar } from '../../src/components/components/layout/BottomBar';
import { Joke } from '../../src/components/components/layout/Joke';

describe('LAYOUT COMPONENTS', () => {
  it('should render correctly BOTTOM BAR component', () => {
    renderer.create(<BottomBar />);
  });

  it('should render correctly BOTTOM BAR component', () => {
    renderer.create(<Joke />);
  });
});
