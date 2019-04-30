//@flow
import React from 'react';
import './inputText.scss';

type InputTextProps = {
  value: string,
  placeholder: string,
  onChange(inputValue: SyntheticEvent<HTMLInputElement>) : void;
}

export class InputText extends React.Component<InputTextProps> {
  render() {
    const {value, placeholder, onChange} = this.props;
    return (
      <input
        className='input-field'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )
  }
}