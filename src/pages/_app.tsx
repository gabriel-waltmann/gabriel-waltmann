import type { AppProps } from 'next/app'
import '../styles/global.scss'

import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { Jost } from '@next/font/google';

const jost = Jost({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme: Theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: jost.style.fontFamily,
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
