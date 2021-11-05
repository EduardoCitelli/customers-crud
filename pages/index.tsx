import type { NextPage } from "next";
import Link from "next/link";
import styles from "./../styles/Styles.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>🌟Customers CRUD app🌟</h1>

      <p className={styles.description}>
        Get started by navigating to{" "}
        <Link href="/customers">
          <a style={{ color: "blue", textDecoration: "underline" }}>/customers</a>
        </Link>
      </p>
    </>
  );
};

export default Home;
