import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
}

:focus {
     outline: 0;
}

body {
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
}

button {
    border: 0;
    
    :hover {
        cursor: pointer;
    }
}


body, input, textarea, button {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`;
