// Next.js
import Head from 'next/head'

// components
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main link={"pages/about.js"} />
    </>
  )
}