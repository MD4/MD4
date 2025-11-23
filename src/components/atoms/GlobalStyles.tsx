import { styleReset } from "react95";
import { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyles = createGlobalStyle`
  ${styleReset}

  :root {
    font-family: 'ms_sans_serif';
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

    height: 100%;
  }

  #root, html, body {
    overflow: hidden;
    height: 100%;
    width: 100vw;
  }

  body {
    font-family: 'ms_sans_serif';
    background-color: ${
      // @ts-expect-error - theme typing issue
      ({ theme }) => theme.desktopBackground
    };
  }

  button {
    cursor: default !important;
  }
`;

export default React.memo(GlobalStyles);
