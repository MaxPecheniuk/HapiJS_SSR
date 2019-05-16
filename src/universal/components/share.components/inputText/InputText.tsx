//@flow
import React, { SyntheticEvent } from 'react';
import './InputText.scss';

interface IInputTextProps {
  value: string;
  placeholder: string;
  className: string;
  name: string;
  onChange(inputValue: SyntheticEvent<HTMLInputElement>) : void
}

export class InputText extends React.Component<IInputTextProps> {
  render() {
    const {value, placeholder, onChange, className, name} = this.props;
    return (
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
      />
    )
  }
}