import React, { useState } from 'react';
import styled from 'styled-components';

import arrow from '../assets/img/arrow_down.svg';

const Dropdown = ({placeholder, value, onChange, variants, id}) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const openDropdownHandler = () => {
    if (isOpened) {
      setIsOpened(false);
    } else if (variants) {
      setIsOpened(true);
    }

  };

  const chooseVariantHandler = (variant) => {
    onChange(variant);
    setIsOpened(false);
  };

  return (
    <FieldSetStyled 
      isBlue={isActive}
      onFocus={() => setIsActive(true)}
      onBlur={() => {
        setIsActive(false);
        setIsOpened(false);
      }}
      tabIndex={0}
    >
      {value !== '' && value && (
        <LegendStyled isBlue={isActive}>
          {placeholder}
        </LegendStyled>
      )}

      <CheckBoxStyled
        type="checkbox"
        id={`opener_${id}`}
        onChange={openDropdownHandler}
      />
      <LableStyled
        htmlFor={`opener_${id}`}
        isValue={!!value}
      >
        {value ? value.text : placeholder}
        <ImgStyled
          src={arrow}
          alt="dropdown arrow"
          isOpened={isOpened}
        />
      </LableStyled>

      {isOpened && (
        <SelectorListStyled>
          {variants.map((variant) => (
            <LableOptionStyled
             htmlFor={variant.id}
             key={variant.id}
             >
              <OptionStyled 
                id={variant.id} 
                type="radio"
                onChange={() => chooseVariantHandler(variant)}
              />
              {variant.text}
            </LableOptionStyled>
          ))}
        </SelectorListStyled>
      )}
    </FieldSetStyled>

  );
};

const FieldSetStyled = styled.fieldset`
  position: relative;
  width: 345px;
  height: 60px;
  margin: 0 0 30px;
  overflow: visible;
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

const CheckBoxStyled = styled.input`
  display: none;
`;

const LableStyled = styled.label`
  width: 100%;
  height: 60px;
  line-height: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 19px 20px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -.05px;
  color: #1b2235;
  color: ${({ isValue }) => isValue ? '#1b2235' : '#a0a1a4'};
`;

const ImgStyled = styled.img`
  width: 8px;
  height: 8px;
  margin: auto 0 auto auto;
  transform: ${({ isOpened }) => isOpened ? 'rotate(180deg)' : 'rotate(0deg)'};
  
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
  color: #a0a1a4;
  margin-left: 22px;
  display: inline-block;
  height: 15px;
  background-color: #fff;
`;

const SelectorListStyled = styled.div`
  display: flex;
  width: 345px;
  padding: 12px 0;
  position: absolute;
  top: 65px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: visible;
  z-index: 1;
  background: #fff;
  border-radius: 8px;
  line-height: 2.29;
  -webkit-box-shadow: 0 15px 66px 0 rgb(0 0 0 / 4%);
  box-shadow: 0 15px 66px 0 rgb(0 0 0 / 4%);
  border: 1px solid #eee;
`;

const LableOptionStyled = styled.label`
  cursor: pointer;
  padding: 0 20px;
  
  &:hover {
    background: #eee;
  }
`;

const OptionStyled = styled.input`
  display: none;
`;

export default Dropdown;
