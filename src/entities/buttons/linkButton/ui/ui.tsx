import styles from "./ui.module.scss";
import { FC, useState } from "react";

interface PropsType {
  children: string;
  color?: string;
}

export const LinkButton: FC<PropsType> = ({ children, color }) => {
  const [hover, setHover] = useState<boolean>(false);
  const style = {
    buttonStyle: {
      color: color ? color : "#222",
    },
  };

  return (
    <>
      <button type="button" className={styles.button} style={style.buttonStyle}>
        {children}
      </button>
    </>
  );
};
