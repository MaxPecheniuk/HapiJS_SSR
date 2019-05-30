import * as React from 'react';
import { SyntheticEvent } from 'react';

interface IInputTextProps {
  value: string;
  placeholder: string;
  className: string;
  name: string;
  onChange(inputValue: SyntheticEvent<HTMLInputElement>): void;
}

export const InputText: React.FunctionComponent<IInputTextProps> = (props: IInputTextProps) => {

  const {value, placeholder, onChange, className, name} = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      name={name}
    />
  );
};