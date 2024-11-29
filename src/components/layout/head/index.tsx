import Head from 'next/head'
import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Gabriel Watmann',
  description: 'Desenvolvedor Fullstack',
}

export default function LayoutHead() {
  return (
    <Head>
      <title>Gabriel Waltmann</title>
      <meta name="description" content="Desnvolvedor Fullstack" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/icon/favicon.ico" />
    </Head>
  )
}