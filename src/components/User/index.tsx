import React from "react";
import Link from "next/link";
import getUserAvatar from "../../helpers/getUserAvatar";
import IUser from "../../types/user";
import styles from "./index.module.css";

function User({ username, name, avatar = "", bio }: IUser) {
  return (
    <section className={styles.intro}>
      <Link href={`/users/${username}`}>
        <a className={styles.logo}>{getUserAvatar(name, avatar)}</a>
      </Link>
      <header>
        <h2>{name}</h2>
        {bio && <p>{bio}</p>}
      </header>
    </section>
  );
}

export default User;
