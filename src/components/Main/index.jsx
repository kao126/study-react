// Next.js
import Image from "next/image";

// components
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";

// styles
import styles from "src/components/Main/Main.module.css";

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
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <Links />
    </main>
  );
}
