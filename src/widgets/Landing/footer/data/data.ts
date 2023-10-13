import VK from './../../../../../public/social/VK.svg';
import TG from './../../../../../public/social/Telegram.svg';

export interface FooterItemsType {
    id: number;
    text: string;
    link: string;
}

export const FooterItemsFirst: FooterItemsType[] = [
    {
        id: 0,
        text: 'Что такое Inverse',
        link: '/',
    },
    {
        id: 1,
        text: 'Контакты',
        link: '/',
    },
];

export const FooterItemsSecond: FooterItemsType[] = [
    {
        id: 0,
        text: 'I.Project',
        link: '/',
    },
    {
        id: 1,
        text: 'I.Tracker',
        link: '/',
    },
    {
        id: 2,
        text: 'I.Tele2Quiz',
        link: '/',
    },
    {
        id: 3,
        text: 'I.Кадры',
        link: '/',
    },
];

export const FooterItemsThird: FooterItemsType[] = [
    {
        id: 0,
        text: 'Дмитрий Степанов',
        link: 'https://vk.com/mack1ch',
    },
    {
        id: 1,
        text: 'Артем Сокерин',
        link: 'https://vk.com/rambletot',
    },
    {
        id: 2,
        text: 'Екатерина Боброва',
        link: '/',
    },
    {
        id: 3,
        text: 'Максим Ефремов',
        link: 'https://vk.com/id158407389',
    },
    {
        id: 4,
        text: 'Алексей Филиппов',
        link: 'https://vk.com/alexfilippow',
    },
    {
        id: 5,
        text: 'Диана Спиридонова',
        link: 'https://vk.com/dinrinx',
    },
    {
        id: 6,
        text: 'Роман Параваев',
        link: 'https://vk.com/f4lkomer',
    },
];

export const FooterItemsFourth: FooterItemsType[] = [
    {
        id: 0,
        text: 'Вакансии',
        link: '/',
    },
    {
        id: 1,
        text: 'Стажировки',
        link: '/',
    },
];

export interface SocialNetworkType {
    id: number;
    link: string;
    icon: string;
    name: string;
}

export const SocialNetwork: SocialNetworkType[] = [
    {
        id: 0,
        link: 'https://vk.com/myolimpolimpiadnik',
        icon: VK.src,
        name: 'ВКонтакте',
    },
    {
        id: 1,
        link: '/',
        icon: TG.src,
        name: 'Телеграм',
    },
];
