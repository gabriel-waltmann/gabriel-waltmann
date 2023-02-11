import { Html, Head, Main, NextScript } from 'next/document'
import { client } from 'apolloClient'
import { DefaultSeo } from 'next-seo';
import { ApolloProvider } from '@apollo/client'
import SEO from '../../next-seo.config';

export default function Document() {

    return (
        <Html lang='pt_BR'>
            <ApolloProvider client={client}>
            <Head >
                <meta name="keywords" content="Typescript, Fullstack, JavaScript, Front-End, Gabriel Waltmann, Portfólio, Portfólio Gabriel Waltmann"></meta>
            </Head>
            </ApolloProvider>
            <body>

                    <Main />
                    <NextScript />
            </body>
        </Html>
    )
}
