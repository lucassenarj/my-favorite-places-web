import React from "react";
import styles from "./index.module.css";
import Avatar from "../../assets/images/avatar.jpg";
import Pic04 from "../../assets/images/pic04.jpg";
import Image from "next/image";

function MiniPlace() {
  return (
    <article className={styles.mini_post}>
      <header>
        <h3>
          <a href="single.html">Vitae sed condimentum</a>
        </h3>
        <time className={styles.published} dateTime="2015-10-20">
          October 20, 2015
        </time>
        <a href="#" className={styles.author}>
          <Image src={Avatar} alt="" />
        </a>
      </header>
      <a href="single.html" className={styles.image}>
        <Image src={Pic04} alt="" />
      </a>
    </article>
  );
}

export default MiniPlace;
