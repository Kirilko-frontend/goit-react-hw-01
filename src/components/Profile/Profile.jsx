import React from 'react';
import styles from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats,
}) {
  return (
    <div className={styles.profile}>
      <div
        className={styles.profileHeader}
      >
        <img
          src={image}
          alt="User avatar"
          className={styles.avatar}
        />
        <h3 className={styles.name}>
          Jacques Gluke
        </h3>
        <p className={styles.tag}>
          @jgluke
        </p>
        <p className={styles.location}>
          Ocho Rios, Jamaica
        </p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
