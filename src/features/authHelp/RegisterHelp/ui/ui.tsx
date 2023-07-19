import { FC } from "react";
import { LinkButton } from "@/entities/buttons/linkButton";
import styles from "./ui.module.scss";
export const RegisterHelp: FC = ({}) => {
  return (
    <div className={styles.helpWrap}>
        <h2 className={styles.text}>Уже регистрировались в сервисах MyOlimp?</h2>
        <a href="/signin" className={styles.link}>Войдите в учетную запись</a>
    </div>
  );
};
