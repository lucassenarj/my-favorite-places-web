import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

function About() {
  return (
    <section className={styles.blurb}>
      <h2>About</h2>
      <p>
        My Favorite Places is a project developed in 2017 where users could save
        and share their favorite places.
      </p>
      <ul className="actions">
        <li>
          <Link href="/about">
            <a className="button">Learn More</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default About;
