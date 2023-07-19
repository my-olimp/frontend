import Link from "next/link";
import styles from "./ui.module.scss";
import { FC, useState, MouseEventHandler } from "react";
import Image from "next/image";
interface PropsType {
  children: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  textSize?: string;
  icon?: any; // объект / ссылка
  iconIsHover?: any; // объект / ссылка
  link: string; // example: "/home"
  iconWidth?: number; // обязательно, если есть иконка | SafeNumber - специальный тип
  iconHeight?: number; // обязательно, если есть иконка | SafeNumber - специальный тип
}

export const LinkButton: FC<PropsType> = ({
  children,
  color,
  textSize,
  onClick,
  icon = false,
  iconIsHover,
  link,
  iconWidth,
  iconHeight,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const style = {
    buttonStyle: {
      color: hover ? "#3579F8" : color ? color : "#222",
      fontSize: textSize ? textSize : "14px",
    },
  };

  return (
    <>
      <Link className={styles.wrap} href={link ? link : ""}>
        <button
          type="button"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={styles.button}
          style={style.buttonStyle}
          onClick={onClick}
        >
          {children}
        </button>
        {icon ? (
          <Image
            className={styles.icon}
            src={hover ? iconIsHover : icon}
            alt="icon"
            width={iconWidth}
            height={iconHeight}
          />
        ) : null}
      </Link>
    </>
  );
};
