import { FC } from "react";
import { DisabledText } from "@/entities/texts/disabledText";
import { LinkButton } from "@/entities/buttons/linkButton";
import styles from "./ui.module.scss";
export const AuthHelp: FC = ({}) => {
  return (
    <div className={styles.helpWrap}>
      <DisabledText>myolymp.ru</DisabledText>
      <LinkButton
        iconWidth={20}
        iconHeight={20}
        icon="/arrows/right.svg"
        iconIsHover="/arrows/rightIsHover.svg"
        link="/signin"
      >
        Зарегистрироваться
      </LinkButton>
    </div>
  );
};
