import { FC } from "react";
import styles from "./ui.module.scss";
import Link from "next/link";

interface Props {
  link?: string;
  children: string;
}

export const SideBarElement: FC<Props> = ({ children, link }) => {
  return (
    <Link href={link ? link : ""} className={styles.wrap}>
      {children}
    </Link>
  );
};
