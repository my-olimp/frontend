"use client";

import { FC, PropsWithChildren, useState } from "react";
import styles from "./navBarButton.module.scss";
import { useRouter } from "next/navigation";

export const NavbarButton: FC<PropsWithChildren> = ({ children }) => {
  let [over, setOver] = useState(false); // Обработчик наведения
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/somepage")}
      className={styles.button}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <p
        className={`${styles.button__text} ${
          over
            ? `${styles.button__text__hover}`
            : `${styles.button__text__hoverNone}`
        }`}
      >
        {children}
      </p>
    </button>
  );
};
