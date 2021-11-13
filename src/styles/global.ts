import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`    
    *, ::before, ::after {
        box-sizing: border-box;
        outline: none;
    }

    html {
        text-size-adjust: 100%;
    }

    body {
        margin: 0;
        color: #4c4c4c;
        font-family: 'Lato', sans-serif;
        font-size: .9375rem;
        line-height: 1.75;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
    }
  
    ul {
        list-style: none;
    }
  
    a {
        text-decoration: none;
    }
`;
