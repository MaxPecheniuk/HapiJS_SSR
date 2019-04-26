/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme/build';
import * as actions from '../action-creator';
import * as types from '../../../constants/constants'
import { Home } from '../Home';


describe('Home component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Home/>);
  })

  it('should render correctly with no props', () => {
    //only parent without child
    expect(component).toMatchSnapshot();
  });

  it('should be possible to activate button with spacebar and click', () => {
    component
      .find('.btn')
      .simulate('keydown', {keyCode: 32})
      .simulate('click');
    expect(component.state('showBlock')).toBe(true);
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  it('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

})

describe('action creator', () => {
  it('should AC an action increase value', () => {
    const expectedAction = {
      type: types.INCREASE
    }
    expect(actions.increase()).toEqual(expectedAction)
  })
  it('should AC an action decrease value', () => {
    const expectedAction = {
      type: types.DECREASE
    }
    expect(actions.decrease()).toEqual(expectedAction)
  })
})
