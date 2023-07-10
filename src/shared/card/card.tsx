import { FC } from "react";
import styles from "./card.module.scss";

interface props {
  bgLink: string;
  text: string;
  id: number;
  handleClick: (id: number) => void;
  active?: boolean;
  title: string;
}

export const Slide: FC<props> = ({
  bgLink,
  text,
  active = false,
  handleClick,
  id,
  title,
}) => {
  return (
    <div
      className={active ? styles.active : styles.slide}
      onClick={() => handleClick(id)}
      style={{
        backgroundImage: `url(${bgLink})`,
      }}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.text}>{text}</h3>
      </div>
    </div>
  );
};
