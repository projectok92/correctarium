import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import Button from './components/Button';
import Input from './components/Input';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;

  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }
`

const App = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const changeEmailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
  }

  return (
    <>
      <GlobalStyle />

      <div>
        <Input
          placeholder="Ваша електронна пошта"
          value={email}
          onChange={changeEmailHandler}
        />
      </div>

      <div>
        <Button text="Замовити" isEnable={true} />
      </div>
    </>
  );
}

export default App;
