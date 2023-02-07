import Header from '../components/Header'
import Main from '../components/Main'
import { client } from 'apolloClient'
import { gql } from '@apollo/client/core'

export default function Home({data}:any) {
  console.log(data)
  return (
    <>
      <Header />

      <Main />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          heading
        }
      }
    `
  })

  return {props:{data}}
}