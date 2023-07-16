import styles from "./ui.module.scss";
import Image from "next/image";

export function Content() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.twoBlockLayout}>
          <div className={styles.block__first}>
            <Image
              className={styles.first_img}
              src="/landing/phone.svg"
              width={400}
              height={400}
              alt="Phone"
            />
          </div>
          <div className={styles.block__second}>
            <h3 className={styles.title}>
              Ресурсы, которые помогут вам в подготовке к олимпиадам
            </h3>
            <p className={styles.text}>
              Настоящие победители и призеры олимпиад создали библиотеку
              материалов, которую вы можете использовать при подготовке
            </p>
            <Image
              className={styles.star}
              src="/landing/star.svg"
              alt="star"
              width={48}
              height={48}
            />
          </div>
        </div>
        <div className={styles.block__large}>
          <Image
            className={styles.bigImg}
            src="/landing/bigImage.svg"
            width={520}
            height={520}
            alt="bigImg"
          />
          <div className={styles.block__large__with__text}>
            <h3 className={styles.large__title}>
              Готовьтесь с нами и достигайте вершин{" "}
            </h3>
            <p className={styles.large__text}>
              Ваши знания выйдут на новый уровень с использованием цифровых
              технологий в образовании
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
