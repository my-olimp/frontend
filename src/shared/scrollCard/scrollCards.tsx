"use client";

import React, { FC } from "react";
import styles from "./scrollCards.module.scss";


interface ItemsType {
  id: number;
  name: string;
  text: string;
  avatarLink: string;
  subject: string;
}

export const ScrollCard: FC<ItemsType> = ({
  id,
  name,
  subject,
  text,
  avatarLink,
}: ItemsType) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${avatarLink})` }}
        >
          {/* Тут должна быть аватарка*/}
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{name}</div>
          <div className={styles.userSubject}>{subject}</div>
        </div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
