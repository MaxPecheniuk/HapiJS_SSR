import React from 'react';

import { shallow } from 'enzyme/build';
import Home from './Home';

it('should render correctly with no props', () => {
  const component = shallow(<Home/>);

  expect(component).toMatchSnapshot();
});