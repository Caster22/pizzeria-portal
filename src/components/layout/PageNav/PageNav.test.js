import React from 'react';
import { shallow } from 'enzyme';
import PageNav from './PageNav';

it('should render without crashing', () => {
  shallow(<PageNav />);
});
