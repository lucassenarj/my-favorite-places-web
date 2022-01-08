import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import IPlace from "../../types/place";
import getPlaceThumbnail from "../../helpers/getPlaceThumbnail";
import getUserAvatar from "../../helpers/getUserAvatar";

function Place(place: IPlace) {
  const placePath = `/places/${place.slug}`;
  const userPath = `/users/${place.user.username}`;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.title}>
          <h2>
            <Link href={placePath}>
              <a>{place.title}</a>
            </Link>
          </h2>
          <p>{place.address}</p>
        </div>
        <div className={styles.meta}>
          <time
            className={styles.published}
            dateTime={new Date(place.created_at).toLocaleDateString()}
          >
            {new Date(place.created_at).toLocaleDateString()}
          </time>
          <Link href={userPath}>
            <a className="author">
              <span className="name">{place.user.name}</span>
              {getUserAvatar(place.user.name, place.user.avatar)}
            </a>
          </Link>
        </div>
      </header>
      <Link href={placePath}>
        <a className={[styles.image, styles.featured].join(" ")}>
          {getPlaceThumbnail({
            title: place.title,
            thumbnail: place.thumbnail,
          })}
        </a>
      </Link>
      <footer>
        <ul className={styles.actions}>
          <li>
            <Link href={placePath}>
              <a className="button large"> View Details </a>
            </Link>
          </li>
        </ul>
        <ul className={styles.stats}>
          <li>
            <Link href={placePath}>
              <a className="icon solid fa-heart">
                {place.rating_avg ? Number(place.rating_avg).toFixed(1) : 0}
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </article>
  );
}

export default Place;
