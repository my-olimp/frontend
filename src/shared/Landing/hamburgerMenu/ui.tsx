"use client";

import { FC, useState } from "react";
import styles from "./ui.module.scss";

export const HamburgerMenu: FC = () => {
  const [opened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(!opened);
  };
  return (
    <div className={styles.burgerContainer}>
      <div
        className={opened ? styles.open : styles.wrap}
        onClick={() => handleClick()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
