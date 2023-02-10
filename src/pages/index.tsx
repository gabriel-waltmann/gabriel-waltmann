import Header from '../components/Header'
import Main from '../components/Main'
import { client } from 'apolloClient'
import { gql } from '@apollo/client/core'
import Footer from '../components/Footer'

export default function Home({ data }: any) {
  return (
    <>
      <Header />

      <Main data={data} />

      <Footer />
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