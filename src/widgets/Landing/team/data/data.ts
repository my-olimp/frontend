import Dmitriy from './../../../../../public/ourTeam/dima.svg';
import Diana from './../../../../../public/ourTeam/diana.svg';
import Maxim from './../../../../../public/ourTeam/maxim.svg';
import Olga from './../../../../../public/ourTeam/olga.svg';
import Ekaterina from './../../../../../public/ourTeam/ekaterina.svg';

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
        bgLink: Diana.src,
        title: 'Диана Спиридонова',
        text: 'Руководитель отдела дизайна',
        isActive: false,
    },
    {
        id: 1,
        bgLink: Maxim.src,
        title: 'Максим Ефремов',
        text: 'Руководитель проекта',
        isActive: false,
    },
    {
        id: 2,
        bgLink: Olga.src,
        title: 'Ольга Минкова',
        text: 'Руководитель отдела CEO',
        isActive: false,
    },
    {
        id: 3,
        bgLink: Ekaterina.src,
        title: 'Екатерины Боброва',
        text: 'Руководитель отдела менеджмента',
        isActive: true,
    },
    {
        id: 4,
        bgLink: Dmitriy.src,
        title: 'Дмитрий Степанов',
        text: 'Руководитель отдела разработки интерфейсов',
        isActive: false,
    },
];
