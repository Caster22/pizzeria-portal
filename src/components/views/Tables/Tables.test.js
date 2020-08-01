import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';

describe('Component Login', () => {
  it('should render without crashing', () => {
    shallow(<Tables />);
  });
});
