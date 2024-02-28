import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../typography/theme"

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: sans-serif;
  }
`

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp