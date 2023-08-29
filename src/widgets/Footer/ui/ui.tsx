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
            <div>
                <span className={styles.logoWrap}>
                    <Logo />
                </span>
                <h3>@ MyOlimp 2023</h3>
            </div>

            <div className={styles.socials}>
                <Link href={'/'}>
                    <Image src={VK} alt={'vk'} />
                </Link>
                <Link href={'/'}>
                    <Image src={TG} alt={'tg'} />
                </Link>
            </div>
        </footer>
    );
};
