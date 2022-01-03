import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Pic01 from "../../assets/images/pic01.jpg";
import Avatar from "../../assets/images/avatar.jpg";
import Image from "next/image";

type IPlace = {
  id: string;
  title: string;
};

function Place({ id, title }: IPlace) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.title}>
          <h2>
            <Link href={`/places/${id}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
        </div>
        <div className={styles.meta}>
          <time className={styles.published} dateTime="2015-11-01">
            November 1, 2015
          </time>
          <a href="#" className="author">
            <span className="name">Jane Doe</span>
            <Image src={Avatar} alt="" />
          </a>
        </div>
      </header>
      <a
        href="single.html"
        className={[styles.image, styles.featured].join(" ")}
      >
        <Image src={Pic01} alt="" />
      </a>
      <p>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
        mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
        accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
        corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
        condimentum, porta lectus vitae, ultricies congue gravida diam non
        fringilla.
      </p>
      <footer>
        <ul className={styles.actions}>
          <li>
            <a href="single.html" className="button large">
              Continue Reading
            </a>
          </li>
        </ul>
        <ul className={styles.stats}>
          <li>
            <a href="#">General</a>
          </li>
          <li>
            <a
              href="#"
              className={[styles.icon, styles.solid, "fa-heart"].join(" ")}
            >
              28
            </a>
          </li>
          <li>
            <a
              href="#"
              className={[styles.icon, styles.solid, "fa-comment"].join(" ")}
            >
              128
            </a>
          </li>
        </ul>
      </footer>
    </article>
  );
}

export default Place;
