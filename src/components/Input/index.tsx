import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Title } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {placeholder && <Title>{placeholder}</Title>}
      <InputContainer>
        <input type="text" ref={inputRef} {...rest} />
      </InputContainer>
      {error && <span>{error}</span>}
    </>
  );
};

export default Input;
