import type { AppProps } from 'next/app'
import '../styles/global.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from 'apolloClient'
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    let element: HTMLElement | null = document.querySelector('html')
    if(element) element.setAttribute('lang', "pt-BR")
  },[])
  return (

      <ApolloProvider client={client}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
      </ApolloProvider>


  )
}
