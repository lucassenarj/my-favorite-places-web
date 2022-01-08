import React from "react";
import styles from "./index.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/lucassenarj/"
            target="_blank"
            title="Linked In"
            rel="noreferrer"
            className="icon brands fa-linkedin"
          >
            <span className="label">Linked In</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lucassenarj"
            target="_blank"
            title="Github"
            rel="noreferrer"
            className="icon brands fa-github"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/lucassenarj"
            target="_blank"
            title="Github"
            rel="noreferrer"
            className="icon brands fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:lucassena.rj@gmail.com"
            title="Email"
            className="icon solid fa-envelope"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>
        &copy; My Favorite Places. Developed by:
        <a
          href="https://lucassenarj.github.io/"
          title="Lucas Sena"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Sena
        </a>
        . Design:
        <a
          href="http://html5up.net"
          rel="noreferrer"
          title="HTML5 UP"
          target="_blank"
        >
          HTML5 UP
        </a>
        .
      </p>
    </section>
  );
}

export default Footer;
