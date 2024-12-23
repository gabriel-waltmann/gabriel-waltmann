import type { AppProps } from 'next/app'
import '../styles/global.scss'

import { Jost } from '@next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const jost = Jost({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={jost.className}>
    <Component {...pageProps} />
    </div>
  )
}
