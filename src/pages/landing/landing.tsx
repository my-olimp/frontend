import { Cover } from "./../../shared/cover/cover";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./landing.module.scss";
import { NavBar } from "@/widgets/navBar/navBar";
import { AudItems } from "./../../shared/audienceItem/item";

export const Landing: FC = () => {
  const [mobile, setMobile] = useState(false);
  const width = useRef(window.innerWidth);
  useEffect(() => {
    if (width.current < 900) {
      setMobile(true);
      console.log(setMobile);
    }
  }, []);
  return (
    <>
      <NavBar mobile={mobile} />
      {!mobile && (
        <Cover
          title="Путеводитель  по миру олимпиад"
          description="Победа в олимпиадах дает возможность получить льготы при поступления в ВУЗ"
        />
      )}
      {mobile && (
        <Cover
          title="Путеводитель  по миру олимпиад"
          description="Победа в олимпиадах дает возможность получить льготы при поступления в ВУЗ"
        />
      )}
      <div className={styles.itemsGroup}>
        <AudItems
          title="Школьникам и студентам"
          description="Общайтесь с единомышленниками, создавайте сообщества, регистрируйтесь на олимпиады"
        />
        <AudItems
          title="Преподавателям"
          description="Материалы для подготовки к олимпиадам всероссийского и международного уровня"
        />
        <AudItems
          title="Онлайн-школам"
          description="Интеграция ваших курсов на платформу, популяризация внутренних мероприятий и работа с мотивированной аудиторией"
        />
      </div>
    </>
  );
};
