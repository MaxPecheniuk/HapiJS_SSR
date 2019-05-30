/* tslint:disable */
import * as React from 'react';
import * as enzyme from 'enzyme';
import Header from '../Header';
import { InputText } from '../../share.components/inputText/InputText';

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = enzyme.shallow(<Header/>);
  })

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = enzyme.shallow(<InputText/>);
  })

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });


});