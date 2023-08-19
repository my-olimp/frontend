import styles from './ui.module.scss';
import Image from 'next/image';
import { SocialNetwork, SocialNetworkType } from '@/widgets/Landing/footer/data/data';
import Link from 'next/link';

export const FooterContacts = () => {
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.leftInfo}>
                    <div className={styles.ecosystem}>© 2022–2023 Экосистема продуктов Inverse</div>
                    <div className={styles.infoCookies}>
                        Используем данные cookies для корректной работы сайтов, персонализации
                        пользователей и других целей предусмотренных Политикой.
                    </div>
                </div>
                <div className={styles.rightInfo}>
                    {SocialNetwork.map((data: SocialNetworkType) => {
                        return (
                            <Link key={data.id} href={data.link}>
                                <Image src={data.icon} alt={data.name} width={42} height={42} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
