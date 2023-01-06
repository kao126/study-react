import Image from 'next/image'
import styles from './Main.module.css'

// components
import { Links } from './Links'
import { Headline } from './Headline'

export function Main({ link }) {
  return (
    <main className={styles.main}>
      <Headline link={link} />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
      </div>
      <Links />
    </main>
  )
}
