import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

function Unregistered() {
  return (
    <section className={styles.intro}>
      <header>
        <p>
          Please,{" "}
          <Link href="/login">
            <a>sign in</a>
          </Link>{" "}
          or{" "}
          <Link href="/register">
            <a>sing up</a>
          </Link>{" "}
          to access your places.
        </p>
      </header>
    </section>
  );
}

export default Unregistered;
