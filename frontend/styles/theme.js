import { createGlobalStyle } from "styled-components";

const buffer = 4;
const timing = ".15s";
const easing = "ease-in-out";

export const theme = {
  util: {
    buffer,
    timing,
    easing,
    transition: `all ${timing} ${easing}`,
  },
  radius: {
    xs: `${buffer}`,
    sm: `${buffer * 2}`,
    md: `${buffer * 4}`,
    lg: `${buffer * 6}`,
    xl: `${buffer * 12}`,
  },
  breakpoint: {
    xs: 640,
    sm: 800,
    md: 1200,
    lg: 1440,
  },
  color: {
    text: {
      light: "#fafafa",
      medium: "#A99F9E",
      dark: "#685451",
    },
    neutral: {
      light: "#fafafa",
      medium: "#A99F9E",
      dark: "#685451",
    },
  },
  text: {
    family: {
      regular: "Times",
    },
    body: {
      size: {
        regular: 18,
      },
      lineHeight: {
        regular: 24,
      },
    },
  },
};
export const GlobalStyle = createGlobalStyle`

  body, html {
    margin: 0 !important;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
