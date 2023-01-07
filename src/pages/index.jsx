// Next.js
import Head from 'next/head'

// React
import { useCallback, useEffect, useState } from 'react';

// components
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'


export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>ボタン</button>
      <Main link={"pages/index.js"} />
    </>
  )
}
