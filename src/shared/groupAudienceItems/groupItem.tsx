import { FC } from "react";
import "./groupItem.scss";
import { AudItems } from "./item/item";

interface TypeData {
  id: number;
  title: string;
  text: string;
  className: string;
}

export const GroupAudItems: FC = () => {
  const data: TypeData[] = [
    {
      id: 0,
      title: "Школьникам и студентам",
      text: "Общайтесь с единомышленниками, создавайте сообщества, регистрируйтесь на олимпиады",
      className: "item1",
    },
    {
      id: 1,
      title: "Преподавателям",
      text: "Материалы для подготовки к олимпиадам всероссийского и международного уровня",
      className: "item2",
    },
    {
      id: 2,
      title: "Онлайн-школам",
      text: "Интеграция ваших курсов на платформу, популяризация внутренних мероприятий и работа с мотивированной аудиторией",
      className: "item3",
    },
  ];

  return (
    <div className="groupItem">
      {data.map((data: TypeData) => {
        return (
          <AudItems
            key={data.id}
            title={data.title}
            text={data.text}
            className={data.className}
          />
        );
      })}
    </div>
  );
};
