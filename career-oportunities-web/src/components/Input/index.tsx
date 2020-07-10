import React, { useState, useRef } from 'react';

import { Container } from './styles';

interface InputProps {
  name: string;
};

const Input: React.FC<InputProps> = ({name}) => {
  const [ placeHolderInput, setPlaceHolderInput ] = useState(name);
  const [ valueLabel, setValueLabel ] = useState('')

  function handleClick() {
    setValueLabel(name);
    setPlaceHolderInput('');
  };

  function handleBlur() {
    setValueLabel('');
    setPlaceHolderInput(name);
  };

  return (
    <Container valueLabel={valueLabel}>
      <label>{valueLabel}</label>
      <input 
        placeholder={ placeHolderInput } 
        onClick={() => handleClick()} 
        onBlur={() => handleBlur()}
      />
    </Container>
  );
};
export default Input;
