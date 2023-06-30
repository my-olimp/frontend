import { FC } from "react";
import styles from "./TagsButton.module.scss";

interface Props {
  id?: number;
  text: string;
}

export const TagsButton: FC<Props> = ({ text, id }) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
