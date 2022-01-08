import React from "react";
import styles from "./index.module.css";
import IPlace from "../../types/place";
import getPlaceThumbnail from "../../helpers/getPlaceThumbnail";
import Link from "next/link";

function MiniPlace(place: IPlace) {
  const thumbnail = getPlaceThumbnail({
    title: place.title,
    thumbnail: place.thumbnail,
  });
  const date = new Date(place.created_at);
  const placePath = `/places/${place.slug}`;
  return (
    <article className={styles.mini_post}>
      <header>
        <h3>
          <Link href={placePath}>
            <a>{place.title}</a>
          </Link>
        </h3>
        <time className={styles.published} dateTime={date.toJSON()}>
          {date.toLocaleDateString()}
        </time>
      </header>
      <Link href={placePath}>
        <a className={styles.image}>{thumbnail}</a>
      </Link>
    </article>
  );
}

export default MiniPlace;
