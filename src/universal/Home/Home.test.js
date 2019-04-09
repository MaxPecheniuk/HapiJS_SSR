import React from 'react';
// import * as Adapter from 'enzyme-adapter-react-16';
// configure({adapter: new Adapter()});
import { shallow, mount, render } from 'enzyme';
import Home from './Home';

describe('sum', () => {
  it('should be selectable by class "red"', function() {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.test')).to.have.lengthOf(0);
  });
});