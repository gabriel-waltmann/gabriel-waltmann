import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt_BR">
      <Head>
        <title>Gabriel Waltmann</title>
        <meta name="description" content="Gabriel Waltmann Portifolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Typescript, Fullstack, JavaScript, Front-End, Gabriel Waltmann, Portfólio, Portfólio Gabriel Waltmann"
        ></meta>
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
