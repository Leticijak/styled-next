import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { GlobalStyle } from "../styles/globalstyle"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
