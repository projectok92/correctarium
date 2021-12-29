import React from "react";
import styled from 'styled-components';

const Input = ({text, placeholder, value, onChange}) => {
  return (
    <FieldSetStyled>
      <LegendStyled>
        {text}
      </LegendStyled>

      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    
    </FieldSetStyled>

  );
};

const FieldSetStyled = styled.fieldset`
  width: 345px;
  height: 68px;
  padding: 0;
  border-radius: 8px;
  border: 1px solid #eee;
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
  top: -8px;
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
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -.04px;
  color: #a0a1a4;
  margin-left: 22px;
  -webkit-transform: translateY(-2px);
  -ms-transform: translateY(-2px);
  transform: translateY(-2px);
  display: inline-block;
  height: 15px;

  &:active {
    color: #0068e4;
  }
`;

export default Input;
