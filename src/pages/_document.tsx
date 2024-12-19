import { Html, Head, Main, NextScript } from 'next/document'
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

export default function Document() {

    return (
        <Html lang='pt_BR'>
            <Head >
                <meta name="keywords" content="Typescript, Fullstack, JavaScript, Front-End, Gabriel Waltmann, Portfólio, Portfólio Gabriel Waltmann"></meta>
            </Head>
            <body>

                    <Main />
                    <NextScript />
            </body>
        </Html>
    )
}
