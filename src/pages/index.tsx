import Header from '../components/Header'
import Main from '../components/Main'
import { client } from 'apolloClient'
import { gql } from '@apollo/client/core'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home({ data }: any) {
  return (

    <>
      <Head>
        <title>Portfólio Gabriel Waltmann</title>
        <meta name="description" content="Desnvolvedor Front End " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <>
        <Header />

        <Main data={data} />

        <Footer />
      </>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          heading
          description
          host
          github
          image {
            url
          }
        }
      }
    `
  })

  return { props: { data } }
}