import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles/theme";

export default function app({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
