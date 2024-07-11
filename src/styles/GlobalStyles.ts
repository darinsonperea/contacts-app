import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --black: #000;
        --green--light: #c1d72f;
        --green--dark: #323232;
        --green--form: #d8e57b;
        --white: #fff;
        --black--light: #00000090;
        --button--shadow: 0px 2px 10px -2px #00000090;
        
        
        
        &.light{
            --app--background: #fff;
            --link--color: #000;
            --header--shadow: 0 0px 10px 0 hsl(220, 14%, 75%);
            --text--color: #000;
            --text--email--color: #6b7280;
            --card--shadow: 0px 4px 10px 0px #e6e6e6;
            --bg--card: #fff;
            --separator--line: #e5e7eb;
        }
        
        
        &.dark{
            --app--background: #000;
            --link--color: #fff; 
            --header--shadow: 0 0px 10px 0 #4b5563;
            --text--color: #fff;
            --text--email--color: #d1d5db;
            --card--shadow: 0px 4px 10px 0px #2d2e2d;
            --bg--card: #2d2e2d;
            --separator--line: #6b7280;
        }
    }
`;

// --red-light: #cf6679;
// --custom-black: #231f20;
// --black-light: #00000090;
// --mode-black: #2d2e2d;
// --gray-500: #6b7280;
// --gray-200: #e5e7eb;
// --gray-300: #d1d5db;

export default GlobalStyles;
