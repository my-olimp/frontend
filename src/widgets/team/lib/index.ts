
export interface sliderDataType {
  id: number;
  bgLink: string;
  title: string;
  text: string;
  isActive: boolean;
}
// Спасибо Next за гениальные ссылки на изображения, на которые я потратил 2 часа
export const sliderData: sliderDataType[] = [
  {
    id: 0, 
    bgLink: '/ourTeam/diana.svg',
    title: "Диана Спиридонова",
    text: "Руководитель отдела дизайна",
    isActive: false,
  },
  {
    id: 1,
    bgLink: '/ourTeam/maxim.svg',
    title: "Максим Ефремов",
    text: "Руководитель проекта",
    isActive: false,
  },
  {
    id: 2,
    bgLink: "/ourTeam/olga.svg",
    title: "Ольга Минкова",
    text: "Руководитель отдела CEO",
    isActive: false,
  },
  {
    id: 3,
    bgLink: "/ourTeam/ekaterina.svg",
    title: "Екатерины Боброва",
    text: "Руководитель отдела менеджмента",
    isActive: true,
  },
  {
    id: 4,
    bgLink: "/ourTeam/dima.svg",
    title: "Дмитрий Степанов",
    text: "Руководитель отдела разработки интерфейсов",
    isActive: false,
  },
];
