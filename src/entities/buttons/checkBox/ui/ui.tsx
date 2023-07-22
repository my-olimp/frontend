import { FC, PropsWithChildren, useState } from "react";
import styles from "./ui.module.scss";
import ActiveCheckBox from "./../../../../../public/auth/checkboxActive.svg";
import HoverCheckBox from "./../../../../../public/auth/checkboxHover.svg";
import DefaultCheckBox from "./../../../../../public/auth/checkbox.svg";

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
        ? `url(${ActiveCheckBox.src})`
        : hover
        ? `url(${HoverCheckBox.src})`
        : `url(${DefaultCheckBox.src})`,
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
