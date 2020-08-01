import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Component Login', () => {
  it('should render without crashing', () => {
    shallow(<Login />);
  });
});
