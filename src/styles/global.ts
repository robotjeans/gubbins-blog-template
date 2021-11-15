import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`    
    *, ::before, ::after {
        box-sizing: border-box;
        outline: none;
    }

    html {}

    body {
        font-family: 'Lato', sans-serif;
        font-size: 1.9rem;
        font-weight: 300;
        line-height: 1.6;
        color: #141414;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        word-wrap: break-word;
        hyphens: auto;
        padding-bottom: 6.6rem;
    }
  
    ul {
        list-style: none;
    }
  
    a {
        text-decoration: none;
        color: inherit;
    }
`;
