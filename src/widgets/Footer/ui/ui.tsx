import React, { FC } from 'react';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';
import Link from 'next/link';
import Image from 'next/image';
import VK from '../../../../public/social/VK.svg';
import TG from '../../../../public/social/Telegram.svg';

interface props {}

const Team = [
    {
        id: 0,
        name: 'Дмитрий Степанов',
        link: 'https://vk.com/mack1ch',
    },
    {
        id: 2,
        name: 'Роман Параваев',
        link: 'https://vk.com/f4lkomer',
    },
    {
        id: 3,
        name: 'Артем Сокерин',
        link: 'https://vk.com/rambletot',
    },
    {
        id: 4,
        name: 'Екатерина Боброва',
        link: '/',
    },
    {
        id: 5,
        name: 'Максим Ефремов',
        link: 'https://vk.com/id158407389',
    },
    {
        id: 6,
        name: 'Алексей Филиппов',
        link: 'https://vk.com/alexfilippow',
    },
    {
        id: 7,
        name: 'Диана Спиридонова',
        link: 'https://vk.com/dinrinx',
    },
];

export const Footer: FC<props> = () => {
    return (
        <footer className={styles.wrap}>
            <div className={styles.logo}>
                <span className={styles.logoWrap}>
                    <Logo />
                </span>
                <div className={styles.socials}>
                    <Link href={'/'}>
                        <Image src={VK} alt={'vk'} />
                    </Link>
                    <Link href={'/'}>
                        <Image src={TG} alt={'tg'} />
                    </Link>
                </div>
                <h3>@ MyOlimp 2023</h3>
            </div>
            <span className={styles.additionalInfo}>
                <div className={styles.about}>
                    <h1>О компании</h1>
                    <h3>Что такое Inverse</h3>
                    <h3>Контакты</h3>
                </div>
                <div className={styles.team}>
                    <h1>Команда</h1>
                    {Team.map((member) => (
                        <Link key={member.id} href={member.link}>
                            <h3>{member.name}</h3>
                        </Link>
                    ))}
                </div>
                <div className={styles.hire}>
                    <h1>Работа у нас</h1>
                    <h3>Стажировки</h3>
                    <h3>Вакансии</h3>
                </div>
            </span>
        </footer>
    );
};
