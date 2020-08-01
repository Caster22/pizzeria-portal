import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from './Kitchen';

describe('Component Login', () => {
  it('should render without crashing', () => {
    shallow(<Kitchen />);
  });
});
