import Logo from '@/entities/Logo/ui/ui';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import TG from '../../../../public/social/Telegram.svg';
import VK from '../../../../public/social/VK.svg';
import styles from './ui.module.scss';

interface props {}

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
                <Link href={'https://vk.com/myolimpolimpiadnik'}>
                    <Image src={VK} alt={'vk'} />
                </Link>
                <Link href={'/'}>
                    <Image src={TG} alt={'tg'} />
                </Link>
            </div>
        </footer>
    );
};
