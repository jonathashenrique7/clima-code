import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../typography/theme"

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html > body { display: flex; align-items: center; justify-content: center; text-align: center; }

  p { color: ${props => theme.primary}; transition: 2s; font-size: 28px; }

  p:hover { color: ${props => theme.primaryHover}; transition: 2s; }

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