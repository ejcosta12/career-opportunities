import React, { useState, useRef, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [placeHolderInput, setPlaceHolderInput] = useState(name);
  const [valueLabel, setValueLabel] = useState('');

  function handleFocus() {
    setValueLabel(name);
    setPlaceHolderInput('');
  }

  function handleBlur() {
    setValueLabel('');
    setPlaceHolderInput(name);
  }

  return (
    <Container valueLabel={valueLabel}>
      <span>
        {valueLabel}
      </span>
      <input
        placeholder={placeHolderInput}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};
export default Input;
