import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';

describe('Component Tables', () => {
  it('should render without crashing', () => {
    shallow(<Tables />);
  });
});
