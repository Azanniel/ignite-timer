import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.gray[900]};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.gray[800]};
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.gray[900]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.green[500]};
  }

  body {
    background-color: ${(props) => props.theme.gray[900]};
    color: ${(props) => props.theme.gray[300]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
