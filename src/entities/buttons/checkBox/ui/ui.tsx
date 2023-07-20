import { FC, PropsWithChildren, useState } from "react";
import styles from "./ui.module.scss";

interface props {
  children?: string;
  isText?: boolean;
  textSize?: string;
}

export const CheckBox: FC<PropsWithChildren<props>> = ({
  children,
  isText = false,
  textSize,
}) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState<boolean>(false);
  const style = {
    textStyle: {
      display: isText ? "block" : "none",
      fontSize: textSize ? textSize : "14px",
      color: hover ? "#3579F8" : "#222",
    },
    checkBox: {
      backgroundImage: active
        ? 'url("/auth/checkboxActive.svg")'
        : hover
        ? "url(/auth/checkboxHover.svg)"
        : "url(/auth/checkbox.svg)",
    },
  };
  return (
    <div
      className={styles.wrap}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <span
        className={styles.checkBox}
        onClick={() => setActive(!active)}
        style={style.checkBox}
      />
      <span
        onClick={() => setActive(!active)}
        className={styles.checkBoxText}
        style={style.textStyle}
      >
        {children}
      </span>
    </div>
  );
};
