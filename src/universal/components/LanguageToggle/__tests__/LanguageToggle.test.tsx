import * as React from 'react';
import * as enzyme from 'enzyme';
import LanguageToggle from '../LanguageToggle';

describe('LanguageToggle component', () => {
  let component;
  beforeEach(() => {
    component = enzyme.shallow(<LanguageToggle/>);
  })

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });

  it('shallow wrapper instance should be null', () => {
    const instance = component.instance();
    expect(instance).toEqual(null);
  });
});