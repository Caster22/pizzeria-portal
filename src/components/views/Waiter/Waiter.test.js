import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';

describe('Component Login', () => {
  it('should render without crashing', () => {
    shallow(<Waiter />);
  });
});
