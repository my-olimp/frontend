import styles from "./item.module.scss";
import { FC } from "react";
import star from "./assets/star.svg";
import Image from 'next/image'

interface Props {
  title: string;
  description: string;
}

export const AudItems: FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.icon}>
        <Image src={star} alt="star"/>
      </div>
    </div>
  );
};
