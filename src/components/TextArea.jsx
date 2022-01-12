import React from 'react';
import styled from 'styled-components';

const TextArea = ({value, onChange}) => {
    return (
        <TextAreaStyled
          value = {value}
          onChange = {onChange}
        />

    );
}

const TextAreaStyled = styled.textarea`
    resize: none;
    width: 100%;
    max-width: 660px;
    min-height: 200px;
    min-width: 100%;
    border-radius: 16px;
    border: 1px solid #eee;
    outline: none;
    padding: 20px 30px;
    margin-bottom: 30px;
    overflow: auto;
`;

export default TextArea;
