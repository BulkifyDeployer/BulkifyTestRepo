import { Global, css } from "@emotion/react";
import { reset } from "./reset";

export const typography = css`
  /* only take latin chars to reduce bundle size */
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url("/fonts/Barlow-Regular.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
    src: url("/fonts/Barlow-Medium.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    src: url("/fonts/Barlow-Bold.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;

const variables = css`
  :root {
    --color-primary: #d84124;
    --color-secondary: #ed8b34;
    --color-dark: #0a0e10;
    --color-dark-gray: #121214;
    --color-dark-gray-50: #19191a;
    --color-light-gray: #96969f;
    --gradient: linear-gradient(315deg, var(--color-primary) 0%, var(--color-secondary) 67%);
    --color-error: #f96c6c;
    --color-white: #ffffff;
    --color-black: #000;
  }
`;

const globalStyles = css`
  ${reset};
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: "Barlow", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  html,
  body {
    min-height: 100vh;
  }
  body {
    // background-color: var(--color-dark-gray);
    background-color: var(--color-black);
    color: var(--color-white);

    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
  }
  #root {
    min-height: 100vh;
    isolation: isolate;
    // background: url('./bg.png');
    background-image: radial-gradient(circle at top center,#526e9710,transparent),url(./bg2.png);
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% auto;
    background-clip: border-box;
    
    // background-color: var(--color-dark-gray);
    // background-position: center center;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  input {
    background: none;
    outline: none;
    border: none;
  }
  // iphone query
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    select,
    select:focus,
    textarea,
    textarea:focus,
    input,
    input:focus {
      font-size: 16px;
    }
  }

  ${typography}
  ${variables}
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;