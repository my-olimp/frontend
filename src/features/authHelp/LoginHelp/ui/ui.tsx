import { FC } from "react";
import { LinkButton } from "@/entities/buttons/linkButton";
import DefaultArrow from "./../../../../../public/arrows/right.svg";
import HoverArrow from "./../../../../../public/arrows/rightIsHover.svg"
import styles from "./ui.module.scss";
export const LoginHelp: FC = ({}) => {
  return (
    <div className={styles.helpWrap}>
      <LinkButton
        transition="all 0.2s"
        hoverColor="#222"
        link="/"
        textSize="16px"
        color="#ADADAD"
      >
        myolimp.ru
      </LinkButton>

      <LinkButton
        iconWidth={20}
        iconHeight={20}
        icon={DefaultArrow.src}
        iconIsHover={HoverArrow.src}
        link="/signup"
        transition="all 0.0001ms"
      >
        Зарегистрироваться
      </LinkButton>
    </div>
  );
};
