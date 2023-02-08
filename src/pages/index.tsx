import Header from '../components/Header'
import Main from '../components/Main'
import { client } from 'apolloClient'
import { gql } from '@apollo/client/core'

export default function Home({data}:any) {
  return (
    <>
      <Header />

      <Main data={data}/>
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
          image {
            url
          }
        }
      }
    `
  })

  return {props:{data}}
}