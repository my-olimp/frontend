import { FC } from "react";
import styles from "./text.module.scss";

export const Text: FC = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Команда</h1>
      <h3 className={styles.text}>
        У нас порядка сорока сотрудников, где каждый выполняет свои задачи. У
        каждого нашего кадра порядка двух лет опыта в разработке, дизайне,
        маркетинге и ведения проектов. Мы стараемся сделать продукт максимально
        удобным для вас, используя свой опыт.
      </h3>
    </div>
  );
};
