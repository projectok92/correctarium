import Button from './components/Button';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Montserrat,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Button text="Замовити" isEnable={true} />
      </div>
    </>
  );
}

export default App;
