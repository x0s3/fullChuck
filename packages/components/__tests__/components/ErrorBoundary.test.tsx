import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorBoundary from '../../src/components/ErrorBoundary';

Enzyme.configure({ adapter: new Adapter() });

const SomeThing = () => null;

describe('ERROR BOUNDARY', () => {
  it('should display and ErrorMessage if wrapped components throws an error', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <SomeThing />
      </ErrorBoundary>
    );

    const error = new Error('test');

    wrapper.find(SomeThing).simulateError(error);
  });
});
