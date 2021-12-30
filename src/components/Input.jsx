import React, { useState } from 'react';
import styled from 'styled-components';

const Input = ({placeholder, value, onChange}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <FieldSetStyled isBlue={isActive}>
      {value !== '' && (
        <LegendStyled isBlue={isActive}>
          {placeholder}
        </LegendStyled>
      )}

      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}

      />
    
    </FieldSetStyled>

  );
};

const FieldSetStyled = styled.fieldset`
  position: relative;
  width: 345px;
  height: 60px;
  padding: 0;
  border-radius: 8px;
  border: ${({ isBlue }) => isBlue ? '1px solid #0068e4' : '1px solid #eee'};
  transition: border 0.4s;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -.05px;
`;

const InputStyled = styled.input`
  width: 315px;
  height: 60px;
  background: rgba(0,0,0,0);
  line-height: 22px;
  padding: 19px 20px;
  position: relative;
  border: none;
  outline: none;

  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -.05px;
    line-height: 1.57;
    color: #a0a1a4;
  }
`;

const LegendStyled = styled.legend`
  position: absolute;
  top: -8px;
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -.04px;
  transition: color 0.4s;
  color: ${({ isBlue }) => isBlue ? '#0068e4' : '#a0a1a4'};
  margin-left: 22px;
  display: inline-block;
  height: 15px;
  background-color: #fff;

  &:active {
    color: #0068e4;
  }
`;

export default Input;
