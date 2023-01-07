// Next.js
import Head from 'next/head'

// components
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main link={"pages/index.js"} />
    </>
  )
}
