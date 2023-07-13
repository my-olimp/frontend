import styles from "./ui.module.scss";
import Link from "next/link";
import {
  FooterItemsFirst,
  FooterItemsType,
  FooterItemsSecond,
  FooterItemsThird,
  FooterItemsFourth
} from "@/widgets/footer/lib/data";

export const FooterItemsInfo = () => {
  return (
    <>
      <div className={styles.wrap}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.item__title}>О компании</div>
            <div className={styles.item__links}>
              {FooterItemsFirst.map((data: FooterItemsType) => {
                return (
                  <>
                    <Link href={data.link} className={styles.item__text}>
                      {data.text}
                    </Link>
                  </>
                );
              })}
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__title}>Проекты</div>
            <div className={styles.item__links}>
              {FooterItemsSecond.map((data: FooterItemsType) => {
                return (
                  <>
                    <Link href={data.link} className={styles.item__text}>
                      {data.text}
                    </Link>
                  </>
                );
              })}
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__title}>Команда</div>
            <div className={styles.item__links}>
              {FooterItemsThird.map((data: FooterItemsType) => {
                return (
                  <>
                    <Link href={data.link} className={styles.item__text}>
                      {data.text}
                    </Link>
                  </>
                );
              })}
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__title}>Работа у нас</div>
            <div className={styles.item__links}>
              {FooterItemsFourth.map((data: FooterItemsType) => {
                return (
                  <>
                    <Link href={data.link} className={styles.item__text}>
                      {data.text}
                    </Link>
                  </>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};