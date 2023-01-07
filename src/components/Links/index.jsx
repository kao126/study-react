import { Inter } from '@next/font/google'

// styles
import styles from 'src/components/Links/Links.module.css'

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs ",
    arrow: "->",
    description: "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn ",
    arrow: "->",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates ",
    arrow: "->",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy ",
    arrow: "->",
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
  }
]

export function Links() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map(item => {
          return (
            <a
            href={item.href}
            key={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
              <h2 className={inter.className}>{item.title}<span>{item.arrow}</span></h2>
              <p className={inter.className}>{item.description}</p>
            </a>
          )
        })}
      </div>
    </>
  )
}
