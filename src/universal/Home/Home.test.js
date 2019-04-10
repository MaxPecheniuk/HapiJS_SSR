import React from 'react';
// import * as Adapter from 'enzyme-adapter-react-16';
// configure({adapter: new Adapter()});
import { shallow } from 'enzyme';
import Home from './Home';

it('should render correctly with no props', () => {
  const component = shallow(<Home/>);

  expect(component).toMatchSnapshot();
});