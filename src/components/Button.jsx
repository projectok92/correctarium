import React from 'react';
import styled from 'styled-components';

const Button = ({text, isEnable}) => {
  return (
    <ButtonStyled disabled={!isEnable}>
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  min-width: 200px;
  width: 260px;
  display: inline-block;
  text-align: center;
  background-color: #1b2235;
  color: #fff;
  text-decoration: none;
  padding: 18px 20px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -.05px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  -webkit-box-shadow: 0 11px 19px 0 rgb(0 0 0 / 16%);
  box-shadow: 0 11px 19px 0 rgb(0 0 0 / 16%);
  
  &:disabled {
    color: hsla(0,0%,100%,.3);
    cursor: default;  
  }
`;

export default Button;
