import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a website using Next.js with Crafter CMS"
        />
        <script src="http://localhost:8080/studio/static-assets/scripts/craftercms-guest.umd.js"/>
      </Head>
      <main>{children}</main>
    </div>
  )
}
