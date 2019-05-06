//@flow
import React from 'react';
import './inputText.scss';

type InputTextProps = {
  value: string,
  placeholder: string,
  className: string,
  onChange(inputValue: SyntheticEvent<HTMLInputElement>) : void
}

export class InputText extends React.Component<InputTextProps> {
  render() {
    const {value, placeholder, onChange, className} = this.props;
    return (
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    )
  }
}