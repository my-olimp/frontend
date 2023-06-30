"use client";

import { FC } from "react";
import styles from "./BigCardLanding.module.scss";
import { TagsButton } from "./../TagsButton/TagsButton";
import accentImg from "./assets/accentImg.svg";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

interface TypeData {
  id: number;
  text: string;
}

export const BigCardLanding: FC<Props> = ({ title, description }) => {
  const data: TypeData[] = [
    {
      id: 0,
      text: "Библиотека",
    },
    {
      id: 1,
      text: "Сообщества",
    },
    {
      id: 2,
      text: "Нетворкинг",
    },
    {
      id: 3,
      text: "Олимпиады",
    },
  ];
  return (
    <div className={styles.layout}>
      <div className={styles.card}>
        <div className={styles.textLayout}>
          <div className={styles.card_info}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.description}>{description}</h3>
          </div>

          <div className={styles.tags}>
            {data.map((data: TypeData) => {
              return <TagsButton key={data.id} text={data.text} />;
            })}
          </div>
        </div>

        <div className={styles.img}>
          <Image src={accentImg} alt="accentImg" className={styles.accentImg} />
    
        </div>
      </div>
    </div>
  );
};
