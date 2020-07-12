import React, {
  useState, useRef, InputHTMLAttributes, useEffect, useCallback,
} from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  nameLabel: string;
}

const Input: React.FC<IInputProps> = ({ name, nameLabel, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { defaultValue, fieldName, registerField } = useField(name);
  const [placeHolderInput, setPlaceHolderInput] = useState(nameLabel);
  const [valueLabel, setValueLabel] = useState('');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setValueLabel(nameLabel);
    setPlaceHolderInput('');
  }, [nameLabel]);

  const handleBlur = useCallback(() => {
    setValueLabel('');
    setPlaceHolderInput(nameLabel);
  }, [nameLabel]);

  return (
    <Container valueLabel={valueLabel}>
      <span>
        {valueLabel}
      </span>
      <input
        defaultValue={defaultValue}
        placeholder={placeHolderInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};
export default Input;
