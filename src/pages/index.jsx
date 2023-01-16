// Next.js
import Head from 'next/head'

// components
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button href="/about" onClick={handleClick} >ボタン</button>
      <button onClick={handleDisplay} >
        { isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {
          array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })
        }
      </ul>
      <Main link={"pages/index.js"} />
    </>
  )
}
