import Link from "next/link";
import Head from "next/head";
import { PropsWithChildren } from "react";
import styles from "./../../styles/DefaultLayout.module.css";

export const DefaultLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Customers CRUD app</title>
        <meta name="description" content="Customers CRUD app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/EduardoCitelli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by @EduardoCitelli
        </a>
      </footer>

      <Link href="/customers">
        <a>Back to customers list 👈</a>
      </Link>
    </div>
  );
};
