import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notie - Coming Soon...</title>
        <meta name="description" content="Notie by onfranciis" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Image
          height={1167}
          width={1641}
          alt="Notie Banner"
          src="/Banner.png"
          className={styles.image}
        />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://www.onfranciis.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          By onfranciis
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
