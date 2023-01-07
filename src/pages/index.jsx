// Next.js
import Head from 'next/head'

// React
import { useCallback } from 'react';

// components
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'


export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </a>
      <Main link={"pages/index.js"} />
    </>
  )
}
