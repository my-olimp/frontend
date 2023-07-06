import styles from "./item.module.scss";
import { FC } from "react";

interface Props {
  title: string;
  text: string;
  className: any;
}

export const AudItems: FC<Props> = ({ title, text, className }) => {
  return (
    <div className={`${styles.item} ${className}`}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{text}</div>
      </div>
    </div>
  );
};
