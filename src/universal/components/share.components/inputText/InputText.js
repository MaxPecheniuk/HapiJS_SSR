//@flow
import React from 'react';
import './InputText.scss';

type InputTextProps = {
  value: string,
  placeholder: string,
  className: string,
  // eslint-disable-next-line
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