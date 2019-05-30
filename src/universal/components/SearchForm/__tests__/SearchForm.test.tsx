import * as React from 'react';
import * as enzyme from 'enzyme';
import SearchForm from '../SearchForm';

describe('LanguageToggle component', () => {
  let component;
  beforeEach(() => {
    component = enzyme.shallow(<SearchForm/>);
  })

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = component.instance().onChange('ddd');
    expect(instance).toEqual(component.state('inputValue').toEqual('ddd'));
  });
});