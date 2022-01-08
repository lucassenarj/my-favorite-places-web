import Link from "next/link";
import React from "react";
import getPhotoThumbnail from "../../helpers/getPhotoThumbnail";
import getPlaceThumbnail from "../../helpers/getPlaceThumbnail";
import getUserAvatar from "../../helpers/getUserAvatar";
import IPlace from "../../types/place";
import styles from "./index.module.css";

function Details(place: IPlace) {
  const avatar = getUserAvatar(place.user.name, place.user.avatar);
  const thumbnail = getPlaceThumbnail({
    title: place.title,
    thumbnail: place.thumbnail,
  });
  const date = new Date(place.created_at);
  const userPath = `/users/${place.user.username}`;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.title}>
          <h2>{place.title}</h2>
          <p>{place.address}</p>
        </div>
        <div className={styles.meta}>
          <time className={styles.published} dateTime={date.toJSON()}>
            {date.toLocaleDateString()}
          </time>
          <Link href={userPath}>
            <a className="author">
              <span className="name">{place.user.name}</span>
              {avatar}
            </a>
          </Link>
        </div>
      </header>
      <span className={[styles.image, styles.featured].join(" ")}>
        {thumbnail}
      </span>
      <p>{place.description}</p>
      <ul>
        {place.photos &&
          place.photos.map((photo, index) => (
            <li key={index}>{getPhotoThumbnail(photo.path, place.title)}</li>
          ))}
      </ul>
      <footer>
        <ul className={styles.stats}>
          <li>
            <a href="#" className="icon solid fa-heart">
              {place.rating_avg ? Number(place.rating_avg).toFixed(1) : 0}
            </a>
          </li>
        </ul>
      </footer>
    </article>
  );
}

export default Details;
