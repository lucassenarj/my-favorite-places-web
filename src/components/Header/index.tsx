import React from "react";
import styles from "./index.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="index.html">Favorite Places</a>
      </h1>
      <nav className={styles.links}>
        <ul>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
        </ul>
      </nav>
      <nav className={styles.main}>
        <ul>
          <li className={styles.menu}>
            <a className="fa-bars" href="#menu">
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
