import type { AppProps } from 'next/app'
import '../styles/global.scss'
import Link from 'next/link'
import { ApolloProvider } from '@apollo/client'
import { client } from 'apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}
