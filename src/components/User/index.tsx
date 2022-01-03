import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/images/author.jpg";
import styles from "./index.module.css";

type IUser = {
  id: string;
  name: string;
};

function User({ id, name }: IUser) {
  return (
    <section className={styles.intro}>
      <Link href={`/users/${id}`}>
        <a className={styles.logo}>
          <Image src={Logo} alt={name} />
        </a>
      </Link>
      <header>
        <h2>{name}</h2>
        <p>
          Another fine responsive site template by
          <a href="http://html5up.net">HTML5 UP</a>
        </p>
      </header>
    </section>
  );
}

export default User;
